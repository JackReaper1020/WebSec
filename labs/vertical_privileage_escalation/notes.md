# Unprotected Admin Functionality
**Date:** 27th Dec 2025  
**Vulnerability Type:** Vertical Privileage Escalation

## Summary
The most basic way to gain Admin Access / privileage escalation is searching the /robots.txt file and checking for anything admin related. If Lucky, There shouldn't be any login or restriction to access the admin panel

## Steps to Reproduce
1. Open the site and head to /robots.txt
2. search for links related to admin
3. Open the link with [site url]/[link found in robots.txt]

## Automation / Script
Made a script for checking accessable links in robots.txt
scripts/robots_checker.py [url]

## Impact
Attacker Could gain admin privileages with this method without any authentication. (Rare cases nowadays)

## Lessons Learned
- CHECK THE DAMN robots.txt just in case



# Unprotected Admin Functionality with Unpridicted URL
**Date:** 27th Dec 2025  
**Vulnerability Type:** Vertical Privileage Escalation

## Summary
CHECKing in the source code for mishaps of links that lets us gain access to admin panel..

## Steps to Reproduce
1. Open the site and inspect source code for any signs of admin url present in scripts.

## Impact
Attacker Could gain admin privileages with this method without any authentication. (ALSO Rare cases nowadays)

## Lessons Learned
- Good idea to check the source code.. But not likely nowadays.. /THIS IS DUMB/


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

# URL-based access control can be circumvented
**Date:** 27th Dec 2025  
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
