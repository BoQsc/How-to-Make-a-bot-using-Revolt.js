# Automated setup for Revolt Bot development.

https://user-images.githubusercontent.com/21064622/220651275-db3ad752-7cc0-4bb3-be95-50d9877e1b71.mp4  

---

### How to use: 
1. Have Windows 10
2. Download script [`nodejs_downloader.cmd`](https://github.com/BoQsc/How-to-Make-a-bot-using-Revolt.js/raw/main/Automated%20setup%20for%20Revolt%20Bot%20development./nodejs_downloader.cmd)
3. Place it in an empty folder.
4. Double click `nodejs_downloader.cmd`
5. Wait until request for bot token.
6. Create a new bot and insert bot token.
7. Invite the bot into your own guild.
8. Write to the chat `Hello` and response from the bot should be `world`. 

### What it does: 
1. Downloads NodeJS Binaries.
2. Extracts NodeJS Binaries.
3. Reinstalls NPM and makes it ready to download new packages.
4. Installs `revolt.js` for NodeJS using NPM
5. Downloads Revolt Bot Example. (`bot.js` of this repository)
6. Asks to insert Bot Token AND opens a Web Browser with URL https://app.revolt.chat/settings/bots
7. After entering Bot Token:
   1. Launches Revolt Bot with Bot Token, without saving the bot token for future.
   2. To save Bot Token Permanently: close bot with CTRL + C and reinsert Bot Token into `./Bot_Token.txt`
8. Opens a Browser Window to invite the bot to any of you existing Guilds.

Next time:
You can run the bot by simply typing `node bot.js`
