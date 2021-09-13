const client = require("../index");
const { createCmd  } = require("../handlers/slashHandler");

client.on('ready', async () => {

    client.user.setPresence({
        activities: [{
            name: 'TBRStore',
            type: "PLAYING"
        }]
    })
    console.log("Bot está online".green.underline.bold)

    createCmd(client, "ID DA SUA GUILDA")
})
