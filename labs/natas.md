f NATAs
**Date:** 29th Dec 2025  

## NATAS0 
pwd: natas0 

to find the next password, just inspect the source

## Natas1 
pwd:  0nzCigAq7t2iALyvU9xcHlYN4MlkIwlq

The password is also located in the source code but you can't right click. Press Fn+f12 to open the source and retrieve the password.

## Natas2
pwd: TguMNxKo1DSa1tujBLuZJnDUlCcUAPlI

There is nothing on the source code, but inside the code you can find a png on /files. appending /files on the url opens up a 'index of /files' inside there is a users.txt file with the password for the next level

## Natas3 
pwd: 3gqisGdR0pjm6tpkDKdIWO2hSvchLeYH

/robots.txt is accessable and you can find /s3cr3t/ in it.which opens index page and there's users.txt file inside it. pwd is inside there

## Natas4
pwd: QryZXc2e0zahULdHrtHxzyYkj59kUxLQ

Access disallowed. You are visiting from "http://natas4.natas.labs.overthewire.org/index.php" while authorized users should come only from "http://natas5.natas.labs.overthewire.org/" 

To get pwd for natas 5, there is a refresh page at the bottom. Open burpsuite and intercept the request. Send the request to repeater.. Or you can do it there aswell. Change the referer in request from http://natas4.natas.labs.overthewire.org/index.php to 'http://natas5.natas.labs.overthewire.org/' This allows access from natas 5 thus giving out the password. 

Kinda like idor... 

## natas5
pwd: 0n35PkggAPm2zbEpOU802c0x0Msn1ToK

IT said "Access Disallowed. You are not logged in."
Looking at the request sent we could see that there was a cookie with loggedin=0. SO heading to Applications under inspect and then to cookies, we could see the loggedin value was set to 0. Switching it up to 1 gave us the password for natas6.

## natas6
pwd: 0RoJwHdSKWFTYR5WuiAewauSuNaBXned

There was a form with enter secret. First trying out random secret didn't work. Looking at the source code, the js was importing another file from /includes/secret.inc . The js code was checking $secret with $_POST{secret}. heading to that url gave us <? $secret = 'FOEIUWGHFEEUHOFUOIU' ?>. Heading back and inserting FOEIUWGHFEEUHOFUOIU to the input field gave us the password for the next room.

## Natas7
pwd: bmg8SvU1LizuWjx3y7xkNERkHxGre0GS

Ok So, this one works with unprotected url? and in the website of natas. It said that all passwords are in /etc/natas_webpass/ simply changing the request parameter from about or home to etc/natas_webpass/natas8 gave uss the password for it

## Natas8 
pwd: xcoXLmzMkoIP9D7hlgPlh9XD7OgLAe5Q

Same as natas6 but now the encoded secret was encrypted using base64, then reversed, and then converted from bin2hex. Creating a simple python script to revese it solved the problem and gave us the secret word, putting it in the form gave us the answer. 

## Natas9
pwd: ZE1ck82lmdGIoErlhQgWND6j2Wzz6b6t

This has a search form but looking at the code, it was using linux to list all the words in the file containing that word.. Now, we can use line breaker for php ';' and get around it and send a command straight to the linux server. using the cat command we could print the content of /etc/natas_webpass/natas9 and get the password. 

## Natas10
t7I5VHvpa14sJTUGV0cbEsbYfFP2dmOu
