// This is a bot.js example.
const { Client } = require("revolt.js");

let client = new Client();

client.on("ready", async () => {
	console.info(`User ID: ${client.user._id}!`);
	console.info(`Logged in as ${client.user.username}!`);
	console.info(`Bot online: ${client.user.online}!`);
	console.info(`Bot is currently in ${client.servers.size} Servers: !`);
	
	
	// Check if bot joined any servers yet.
	// Use UserID to open bot invite browser window.
	if (client.servers.size < 1) {
		const { spawn } = require('node:child_process')
		const command = spawn('explorer', ["https://app.revolt.chat/bot/"+ client.user._id])
	}
	
	client.users.edit({
		status: {
			text: "Listening to you.",
			presence: "Idle",
		},
	});
});

client.on("message", async (message) => {
	if (message.content === "hello") {
		message.channel.sendMessage("world");
	}
});


let bot_token = process.argv[2];

var fs = require('fs');
if (fs.existsSync("./bot_token.txt")) {
	if (fs.statSync('./bot_token.txt').size == 0) {
		console.log("./bot_token.txt file is empty")
	} else {
		console.log("bot_token.txt file is not empty")
		bot_token = fs.readFileSync('./bot_token.txt','utf8');
	}
	
} else {
	
	const stream = fs.createWriteStream('./bot_token.txt');
	stream.write("");
	stream.end();
}

console.log("Bot token entered: ", bot_token);
if (bot_token == undefined) process.exit(0);

client.loginBot(bot_token);
