# User ID Controlled by Request Parameter, With Data Leakage in Redirect
**Date:** 29th Dec 2025  
**Vulnerability Type:** Horizontal Privileage Escalation

## Summary
This lab contains an access control vulnerability where sensitive information is leaked in the body of a redirect response. To solve the lab, obtain the API key for the user carlos and submit it as the solution. You can log in to your own account using the following credentials: wiener:peter

## Steps to Reproduce
1. Login using your account
2. Try changing the id parameter to another user (Carlos)
3. Observe the response

## Lessons Learned
- Check the url for any paramerters such as id or uid.
