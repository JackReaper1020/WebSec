# User ID Controlled by Request Parameter, With unpredicted user IDs
**Date:** 29th Dec 2025  
**Vulnerability Type:** Horizontal Privileage Escalation

## Summary
This lab has a horizontal privilege escalation vulnerability on the user account page, but identifies users with GUIDs. To solve the lab, find the GUID for carlos, then submit his API key as the solution. You can log in to your own account using the following credentials: wiener:peter

## Steps to Reproduce
1. Find a blog post by carlos.
2. Click on carlos and observe that the URL contains his user ID. Make a note of this ID.
3. Log in using the supplied credentials and access your account page.
4. Change the "id" parameter to the saved user ID.
5. Retrieve and submit the API key.

## Impact
Attacker Could gain access to other user's account with this method without any authentication. (ALSO Rare cases nowadays)

## Lessons Learned
- the uid can be placed in the link of the users comments or posts in the account when it redirects us to the user's account
