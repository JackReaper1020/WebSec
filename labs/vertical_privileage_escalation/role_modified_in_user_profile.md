# User role can be modified in user profile
**Date:** 27th Dec 2025  
**Vulnerability Type:** Vertical Privileage Escalation

## Summary
After logging into an account.. Use burpsuite to check the request and response sent.. IF there is any field used for updating information of the user.. Check in burpsuite for any other attributes being added and sent back.. IF there's anything like roleid or anything with an integer, try changing it to gain access

## Steps to Reproduce
1. Open the web app and login using a credentials
2. Send a request changing the email or anything that's provided there.. and use burpsuite to intercept
3. Send the request to repeater and look at the response if there's anything else connected with it such as roleid:1 
4. IF found try adding "roleid":2 or any number to the request that is being used to change the email. (The new entry goes with the fn for changing the email.) 
5. Run it and check if you have admin 

## Impact
Attacker Could gain admin privileages with this method without any authentication. (ALSO Rare cases nowadays)

## Lessons Learned
- Check the request from the site for any other changes it makes while changing your password or emails.

