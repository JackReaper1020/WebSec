# User ID Controlled by Request Parameter with password Disclosure
**Date:** 29th Dec 2025  
**Vulnerability Type:** Horizontal to Vertical Privileage Escalation

## Summary
This lab has user account page that contains the current user's existing password, prefilled in a masked input. To solve the lab, retrieve the administrator's password, then use it to delete the user carlos. You can log in to your own account using the following credentials: wiener:peter

## Steps to Reproduce
1. Login using your account
2. Try changing the id parameter to another user (administrator)
3. viewing response in Burp to observe admin password
4. Login to admin and delete Carlos

## Lessons Learned
- Doesn't really happen but if you know that admin's uid or name, and they have password field with the password pre-entered, this could work.. Might be available nowadays but hard to say.
