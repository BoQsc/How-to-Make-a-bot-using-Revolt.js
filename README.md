# Make-a-bot-in-Revolt.js
![image](https://user-images.githubusercontent.com/21064622/204128095-ec382518-2d90-403b-a5ba-cbf7dca6ffeb.png)


1. Download [Node JS Binary](https://nodejs.org/en/download/current/)
1. Reinstall NPM to avoid bug where **.\node_modules\npm** folder being deleted after first use. [More information](https://stackoverflow.com/a/71853469/3789797)   
    `npm install -D npm`  


2. Install [revolt.js](https://www.npmjs.com/package/revolt.js)
   * `npm i revolt.js`
   
3. Go to Revolt and open **My Bots**  
![image](https://user-images.githubusercontent.com/21064622/204127696-9b59e728-abce-4794-a192-541ef21b79f8.png)

4. Add Bot
5. Copy Token 
6. Use CommonJS example.  
**bot.js**
```
const { Client } = require("revolt.js");

let client = new Client();

client.on("ready", async () => {
		console.info(`Logged in as ${client.user.username}!`);
		console.info(`Logged in as ${client.user.status}!`);
		console.info(`Logged in as ${client.user.online}!`);
		client.user.bot.status = {
			text: "Listening to you."
		};
        client.users.edit({
            status: {
                text: "Listening to you.",
                presence: "Idle",
            },
        });
		
		console.info(`Logged in as ${client.user.bot.status}!`);
	}
);

client.on("message", async (message) => {
    if (message.content === "hello") {
        message.channel.sendMessage("world");
    }
});

client.loginBot("..");
```

7. Insert your Token into `client.loginBot("..");`

8. Start your bot with `node --experimental-specifier-resolution=node bot.js`

9. Invite the bot into your server using Copy Invite Link button from **My Bots** Tab.  
![image](https://user-images.githubusercontent.com/21064622/204128158-c254b43d-bab6-47a1-b4c8-11918e50813c.png)


---

10. Edit the bot in the **My Bots**:  
    Change profile picture and Description.  
![image](https://user-images.githubusercontent.com/21064622/204127696-9b59e728-abce-4794-a192-541ef21b79f8.png)

---

11. Enabling TypeScript   
    *This part of article is incomplete and needs help.*  
    `npm i -D typescript`  
    `npm i revolt-api`  
    `npm i -D @types/node`  
    `npm i -D @types/ws`  
    `npm i axios`  
    `npm i -D @insertish/oapi`  
    `npx tsc bot.ts  --lib ES6 --lib DOM --esModuleInterop --module ES6`  
    `npx tsc --showConfig`  
    `npx tsc bot.ts  --lib ES6 --lib DOM --esModuleInterop --module ES6 --moduleResolution node --target ES6 --showConfig`  
    `npx tsc bot.ts --esModuleInterop --module ES6 --moduleResolution node --target ES6 --experimentalDecorators --strict --showConfig`  
    https://github.com/debertjamie/revolt-bot-template/blob/master/tsconfig.json  
    Current issue: https://github.com/revoltchat/revolt.js/issues/57    

11. Rehosting onto Linux Platform.  
![image](https://user-images.githubusercontent.com/21064622/204130953-19d5572d-988b-456c-b38a-7ae806b1dfd5.png)  
    1. `apt install nodejs npm -y`  
    2. Install [revolt.js](https://www.npmjs.com/package/revolt.js)
        * `npm i revolt.js`
    3. `node --experimental-specifier-resolution=node bot.js`
12. Make the bot stay after disconnecting from Linux Machine: 
    ```
    nohup node --experimental-specifier-resolution=node bot.js > /dev/null 2>&1 & echo $! > run.pid
    ```
    
13. Stop the bot if needed.
    ```
    kill -9 `cat run.pid`
    ```


Useful Linux Commands:

```
ps
killall node
```
