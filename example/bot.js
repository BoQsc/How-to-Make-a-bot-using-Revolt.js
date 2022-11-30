const { Client } = require("revolt.js");

let client = new Client();

console.info(`Welcome to a Basic Revolt Bot.`);
console.info(`Revolt Library version: ${require("revolt.js").LIBRARY_VERSION}!`);
console.info(`_______________________________`);

client.on("packet", async (events) => {
	/* console.info(`event happened ${events}`); */ 
	
	for (const [keyd, valued] of Object.entries(events)) {
		/* console.log(`    ${keyd}: ${valued}`); */
		
		if (valued == "MessageReact" || valued == "MessageUnreact"){

			console.log(`type           ${events.type}`);
			console.log(`id             ${events.id}`);
			console.log(`channel_id     ${events.channel_id}`);
			console.log(`user_id        ${events.user_id}`);
			console.log(`emoji_id       ${events.emoji_id}`);
		}
	}
})



client.on("ready", async () => {
		console.info(`Bot Token: ${client.session}!`);
		console.info(`User ID: ${client.user._id}!`);
		console.info(`Logged in as ${client.user.username}!`);
		console.info(`Bot online: ${client.user.online}!`);
		client.users.edit({
			status: {
				text: "Listening to you.",
				presence: "Idle",
			},
		});
		console.info(`Bot owner ${client.user.bot.owner}!`); 
		console.info(`Created at ${client.user.createdAt}!`);
		console.info(`Presence: ${client.user.status.presence}!`);
		console.info(`Presence text: Logged in as ${client.user.status.text}!`);
		console.info(`Servers joined:  ${client.servers.size}!`);
		console.info(`Get server by ID:  ${client.servers.get("01GJ0CVB1ZV2H1YA13S6ZK4N4N").name}!`);
		
		let server_count_index = 0;
		console.info("Joined Servers:");
		console.info(`debuginfo:  ${client.servers.forEach(
		async (values, keys, objects) => {
			console.info(++server_count_index + " " + values._id + " " + values.name);
			console.info("  Joined at: " + values.member.joined_at);
			console.info("  Roles: " + values.member.roles);
			console.info("  Nickname: " + values.member.nickname);
			console.info("  Ranking: " + values.member.ranking);
			console.info("  roleColour: " + values.member.roleColour);
			console.info("  orderedRoles: " + values.member.orderedRoles);
			console.info("  orderedRoles: " + typeof values.member.orderedRoles);
			


			await values.member.edit({
				nickname: "Guild Bot V0.1"
				
			});
			
			
			
			
			/* 403  - Forbidden, the role is the same or higher than current one.*/
			await values.member.edit({
				roles: ["01GJWB0CYDB8BR2AZE7NTT5TYP", "01GJ5MY14DJB867D7158HYAKZD", "01GJ5Q8X6VNW4PDGR88NYJY1DR"]
				
			});

			
			
			for (const [key, value] of Object.entries(values.member.orderedRoles)) {
			  console.log(`    ${key}: ${value}`);
				for (const [keyz, valuez] of Object.entries(value)) {
					console.log(`      ${keyz}: ${valuez}`);
					if (keyz == 1) {
						console.log(`          Name: ${valuez.name}`);
						console.log(`          Colour: ${valuez.colour}`);
						console.log(`          Hoist: ${valuez.hoist}`);
						console.log(`          Permissions: ${valuez.permissions}`);
						console.log(`          Rank: ${valuez.rank}`);
					}
				}
			}
			
		}
		
		)}!`);
		
		/* console.dir(client.servers.data_, { depth:1 }) */
		/* console.dir(client.servers, { depth:1 }) */
		/* console.dir(client.channels, { depth:1 }) */

	}
);

client.on("message", async (message) => {
	if (message.content === "hello") {
		message.channel.sendMessage("world");
	}
});

client.loginBot("..");
