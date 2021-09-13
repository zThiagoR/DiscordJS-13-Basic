const discord = require('discord.js')

module.exports = {
    name: 'ping',
    aliases: ['ping2'],
    run: async(client, message, args) => {

        message.channel.send("Ping!")
        
    }
}