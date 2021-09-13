const {token} = require("./config.json")
const fs = require('fs')
require('colors')
const { Client, Intents, Collection, Interaction } = require('discord.js');
const client = new Client({ 
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] 
});

client.commands = new Collection()
client.aliases = new Collection()
client.events = new Collection()
client.slashCommands = new Collection()
module.exports = client

require('./handlers/handler')(client);

client.login(token)