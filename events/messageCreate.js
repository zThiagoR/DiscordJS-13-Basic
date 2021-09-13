const client = require("../index");

client.on('messageCreate', async (message) => {
    
    const prefix = "!";
  
    if (message.author.bot || !message.content.toLowerCase().startsWith(prefix) || message.channel.type === "DM") return;
    
    const args = message.content.slice(prefix.length).split(' ');
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;;

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if (!command) return;
    if (command) command.run(client, message, args);

})