# URL-based access control can be circumvented **Date:** 27th Dec 2025  
**Vulnerability Type:** Vertical Privileage Escalation

## Summary
This website has an unauthenticated admin panel at /admin, but a front-end system has been configured to block external access to that path. However, the back-end application is built on a framework that supports the X-Original-URL header.

## Steps to Reproduce
1. To solve the lab, access the admin panel and delete the user carlos
2. Try to load /admin and observe that you get blocked. Notice that the response is very plain, suggesting it may originate from a front-end system.
3. Send the request to Burp Repeater. Change the URL in the request line to / and add the HTTP header X-Original-URL: /invalid. Observe that the application returns a "not found" response. This indicates that the back-end system is processing the URL from the X-Original-URL header.
4. Change the value of the X-Original-URL header to /admin. Observe that you can now access the admin page.
5. To delete carlos, add ?username=carlos to the real query string, and change the X-Original-URL path to /admin/delete..

## Impact
Attacker Could gain admin privileages with this method without any authentication. (ALSO Rare cases nowadays)

## Lessons Learned
- If the response is simple with just text, it could be that it's set from frontend and not the backend. 
- Try to change from GET to POST
- Change the url in request line to / and add  header **X-Original-URL: /admin** and check for changes.. 
