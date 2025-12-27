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


