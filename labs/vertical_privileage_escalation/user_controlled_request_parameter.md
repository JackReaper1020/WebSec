# User Controlled By Request parameter
**Date:** 27th Dec 2025  
**Vulnerability Type:** Vertical Privileage Escalation

## Summary
When logging into an account.. Use burpsuite to check the request and response sent.. There could be a cookie option such as admin=false. IF you find it.. Then change it to true, it should give you admin privileages when the cookie settings is altered.

## Steps to Reproduce
1. Open the web app and login using a credentials
2. Open Burpsuite and intercept the request being sent.. 
3. IF There is a cookie option such as 'admin=false', make it true.
4. IF it shows admin panel as a link. Head to cookies and change it in browser. 
5. Go to inspect>Applications>Cookies and change admin from false to true

## Impact
Attacker Could gain admin privileages with this method without any authentication. (ALSO Rare cases nowadays)

## Lessons Learned
- Check the request from the site for any options for knowing if the logged in account is admin or not. IF there is tinker with it.. Mostly boolean statements
- BUT Rarely found in real world 

