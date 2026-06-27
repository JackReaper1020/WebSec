# Penetration Test Report: Hidden Deep Into My Heart (TryHackMe)

**Date:** June 27, 2026

**Target:** Cupid's Secret Vault (Web Application)

**Objective:** Boot-to-Root / Capture the Flag

---

## 1. Executive Summary

This report outlines the successful compromise of the "Hidden Deep Into My Heart" target system. The breach was achieved entirely through web application enumeration and exploiting an Information Disclosure vulnerability. By combining recursive directory fuzzing with the discovery of hardcoded credentials left in a public configuration file, administrative access was fully compromised without the need for complex injection attacks.

---

## 2. Reconnaissance & Initial Enumeration

### Network Scanning & Directory Fuzzing

Initial enumeration began with a standard port scan, which identified the primary target as a web application running on port 5000.

A directory brute-force attack was launched against the root of the web server to map the application's attack surface.

* **Tool Used:** Gobuster / Dirb
* **Result:** Discovered a hidden directory at `/cupids_secret_vault/`.

Initial inspection of this directory yielded an empty page, presenting a false dead end designed to halt automated scanning.

---

## 3. Deep Enumeration & Vulnerability Discovery

### Recursive Fuzzing

Recognizing the empty vault as a container rather than a destination, a secondary, recursive directory scan was executed specifically targeting the `/cupids_secret_vault/` path.

* **Command Structure:** `gobuster dir -u http://10.48.176.249:5000/cupids_secret_vault/ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt`
* **Result:** Discovered a restricted login portal at `/cupids_secret_vault/administrator`.

### Attack Vector Analysis (Auth Bypass Attempts)

The administrative login page was initially tested for structural database vulnerabilities. The following methodologies were applied:

1. **Classic SQL Injection:** Payloads such as `' OR 1=1 --` were tested against both the username and password fields to force a boolean `True` evaluation.
2. **Targeted SQLi:** Payloads designed to comment out the password requirement (`admin' -- -`) were attempted.
3. **NoSQL Injection:** Payloads designed for non-relational databases (`{"$ne": null}`) were tested.

**Result:** All injection attempts failed. The application did not leak any verbose database errors, indicating that the authentication backend was properly sanitizing inputs.

---

## 4. Exploitation

### Information Disclosure (robots.txt)

With injection vectors exhausted, the focus shifted back to manual web enumeration, specifically targeting files that dictate search engine behavior.

Navigating to http://10.48.176.249:5000/robots.txt revealed standard directives disallowing crawlers from the vault. However, the developer left a commented string at the bottom of the file:

```text
User-agent: *
Disallow: /cupids_secret_vault/*

# cupid_arrow_2026!!!

```

### Session Takeover

The commented string was identified as a leaked, hardcoded password.
Returning to the `/cupids_secret_vault/administrator` portal, these credentials were used to attempt a direct login:

* **Username:** `admin`
* **Password:** `cupid_arrow_2026!!!`

**Result:** Authentication was successful, granting full administrative access and securing the final flag.

---

## 5. Lessons Learned & Remediation

### Key Takeaway

**Check the fckin robots.txt.** Before launching complex payloads, brute-forcing directories, or attempting to break a database, always check the public configuration files. Developers frequently use `robots.txt` to hide directories they don't want indexed, inadvertently creating a treasure map for attackers. Worse, they occasionally leave development notes or passwords in plain text.

### Remediation Recommendations

1. **Remove Hardcoded Secrets:** Credentials, API keys, and sensitive developer notes must never be stored in plain text within source code or public configuration files like `robots.txt`.
2. **Implement Proper Access Controls:** Relying on "security through obscurity" (hiding a login page in an unlinked directory) is ineffective against automated directory fuzzing. Ensure all administrative portals require strong, multi-factor authentication, regardless of where they are located on the server.
