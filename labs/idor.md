# Insecure Direct Object Reference
**Date:** 29th Dec 2025  
**Vulnerability Type:** IDOR

## Summary
This lab stores user chat logs directly on the server's file system, and retrieves them using static URLs.

Solve the lab by finding the password for the user carlos, and logging into their account.


## Steps to Reproduce
1. Select the Live chat tab.
2. Send a message and then select View transcript.
3. Review the URL and observe that the transcripts are text files assigned a filename containing an incrementing number.
4. Change the filename to 1.txt and review the text. Notice a password within the chat transcript.
5. Return to the main lab page and log in using the stolen credentials. 

## Lessons Learned
- Doesn't really happen but if you know that admin's uid or name, and they have password field with the password pre-entered, this could work.. Might be available nowadays but hard to say.
