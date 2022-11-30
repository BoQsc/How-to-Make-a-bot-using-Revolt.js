### Basic 
Insert [Revolt Bot Token](https://app.revolt.chat/settings/bots) into [`./token.txt`](./token.txt)

Start bot 
```
node --experimental-specifier-resolution=node bot.js
```

Use `CTRL + C` to close bot. 


### Additional

Make the bot stay after disconnecting from Linux Machine:
```
nohup node --experimental-specifier-resolution=node bot.js > /dev/null 2>&1 & echo $! > run.pid
```

Stop the bot if needed.
```
kill -9 `cat run.pid`
```

Useful Linux Commands:
```
ps
killall node
```
