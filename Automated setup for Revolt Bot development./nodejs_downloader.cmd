@ECHO OFF
TITLE Portable Automated NodeJS with revolt.js and Revolt Bot Example.

REM Download SHASUMS256.txt to FIND latest NodeJS release filename
ECHO 1. Downloading SHASUMS256.txt
curl https://nodejs.org/dist/latest/SHASUMS256.txt > ".\SHASUMS256.txt"

ECHO 2. Parsing each line of second column of SHASUMS256.txt
FOR /F "tokens=2 delims= " %%i IN (SHASUMS256.txt) DO (
	ECHO %%i | FIND /I "win-x64.zip" >NUL && ( 
		ECHO NodeJS filename found. (%%i^)
		SET "Filename=%%i"
	) || (
		REM ECHO %%i filename does not contain string.
	)
)
IF "%Filename%"=="" ECHO Latest release filename Not found in the SHASUMS256.txt of https://nodejs.org/dist/latest/ && PAUSE && EXIT

ECHO 3. Splitting filename between .zip file extension and filename (%Filename%)
FOR %%f IN ("%Filename%") DO SET "Filename_without_extension=%%~nf"

ECHO 4. Downloading latest NodeJS using Filename.
curl "https://nodejs.org/dist/latest/%Filename%" -O

ECHO 5. Extracting downloaded NodeJS archive in the current directory
tar -xvf "./%Filename%" -C ./

ECHO 6. Deleting Downloaded files. 
DEL "./%Filename%"
DEL ".\SHASUMS256.txt"

ECHO 7. [Prevention] Reinstall NodeJS NPM to prevent deletion of NPM after first NPM package download/installation.
CD ".\%Filename_without_extension%"
CALL .\npm install -D npm

ECHO 8. NodeJS NPM: Install revolt.js 
CALL .\npm i revolt.js

ECHO 9. Downloading Revolt.js bot example.
curl "https://raw.githubusercontent.com/BoQsc/How-to-Make-a-bot-using-Revolt.js/main/Automated%%20setup%%20for%%20Revolt%%20Bot%%20development./bot.js" -O

ECHO 10. Please insert Bot Token:
explorer "https://app.revolt.chat/settings/bots"
SET /p "bot_token=Enter Bot Token: "

ECHO 11. Starting Revolt.js bot example.
node "./bot.js" "%bot_token%"

cmd ".\"
