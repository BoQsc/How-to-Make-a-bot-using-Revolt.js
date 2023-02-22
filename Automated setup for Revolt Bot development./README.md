# Automated setup for Revolt Bot development.
How to use: 
1. Have Windows 10
2. Download script `nodejs_downloader.cmd`
3. Place it in an empty folder.
4. Double click `nodejs_downloader.cmd`

What it does: 
1. Downloads NodeJS Binaries.
2. Extracts NodeJS Binaries.
3. Reinstalls NPM and makes it ready to download new packages.
4. Installs `revolt.js` for NodeJS using NPM
5. Downloads Revolt Bot Example. (`bot.js` of this repository)
6. Asks to insert Bot Token AND opens a Web Browser with URL https://app.revolt.chat/settings/bots
7. After entering Bot Token:
   1. Launches Revolt Bot with Bot Token, without saving the bot token for future.
   2. To save Bot Token Permanently: close bot with CTRL + C and reinsert Bot Token into `./Bot_Token.txt`

Next time:
You can run the bot by simply typing `node bot.js`