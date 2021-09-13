const client = require("../index");

client.on('interactionCreate', async (interaction) => {

    let slashCmds = client.slashCommands.get(interaction.commandName)

    try {

        if(slashCmds) slashCmds.run(interaction)

    } catch(e) {

        console.error(e);
        await interaction.reply({ content: 'Oops! Houve uma falha no comando!', ephemeral: true });

    }
})