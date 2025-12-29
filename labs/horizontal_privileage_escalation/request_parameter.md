# User ID Controlled by Request Parameter 
**Date:** 29th Dec 2025  
**Vulnerability Type:** Horizontal Privileage Escalation

## Summary
Example of Insecure Direct Object Reference(IDOR) Vulnerability. This arises where user-controller parameter values are used to access resources or functions directly
This lab has a horizontal privilege escalation vulnerability on the user account page.

To solve the lab, obtain the API key for the user carlos and submit it as the solution.

You can log in to your own account using the following credentials: wiener:peter

## Steps to Reproduce
1. Log in using the supplied credentials and go to your account page.
2. Note that the URL contains your username in the "id" parameter.
3. Send the request to Burp Repeater.
4. Change the "id" parameter to carlos.
5. Retrieve and submit the API key for carlos.

## Impact
Attacker Could gain access to other user's account with this method without any authentication. (ALSO Rare cases nowadays)

## Lessons Learned
- Check the url for any paramerters such as id or uid.
