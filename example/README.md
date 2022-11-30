### Setup 
1. Install [Node.js](https://nodejs.org/en/download/current/)
2. Install `npm i revolt.js`
### Basic 
1. Insert [Revolt Bot Token](https://app.revolt.chat/settings/bots) into [`./token.txt`](./token.txt)

2. Start **bot.js**  
```bash
node "--experimental-specifier-resolution=node" "./bot.js"
```

Use `CTRL + C` to close bot. 


### Additional

1. Make the bot stay after disconnecting from Linux Machine:
   ```bash
   nohup node "--experimental-specifier-resolution=node" "./bot.js" > /dev/null 2>&1 & echo $! > run.pid
   ```

2. Stop the bot if needed.
   ```bash
   kill -9 `cat run.pid`
   ```

Useful Linux Commands:
```bash
ps
killall node
```
