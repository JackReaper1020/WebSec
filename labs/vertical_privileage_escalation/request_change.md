# Method-based access control can be circumvented
**Date:** 27th Dec 2025  
**Vulnerability Type:** Vertical Privileage Escalation

## Summary
An alternative attack relates to the HTTP method used in the request. The front-end controls described in the previous sections restrict access based on the URL and HTTP method. Some websites tolerate different HTTP request methods when performing an action. If an attacker can use the GET (or another) method to perform actions on a restricted URL, they can bypass the access control that is implemented at the platform layer.

## Steps to Reproduce
1. Log in using the admin credentials.
2. Browse to the admin panel, promote carlos, and send the HTTP request to Burp Repeater.
3. Open a private/incognito browser window, and log in with the non-admin credentials.
4. Attempt to re-promote carlos with the non-admin user by copying that user's session cookie into the existing Burp Repeater request, and observe that the response says "Unauthorized".
5. Change the method from POST to POSTX and observe that the response changes to "missing parameter".
6. Convert the request to use the GET method by right-clicking and selecting "Change request method".
7. Change the username parameter to your username and resend the request.

## Impact
Attacker Could gain admin privileages with this method without any authentication. (ALSO Rare cases nowadays)

## Lessons Learned
- Works if you know the request that is used by the admin to promote a user
