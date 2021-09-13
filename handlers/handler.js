const fs = require('fs')

module.exports = (client) => 
    
    // Slash Commands Handler

    fs.readdirSync("./slashCommands").forEach(dir => {

        const slashCommands = fs.readdirSync(`./slashCommands/${dir}`).filter(file => file.endsWith(".js"));
    
        for (let file of slashCommands) {
            let pullSlashCommands = require(`../slashCommands/${dir}/${file}`);
    
            if (pullSlashCommands.name) {
                client.slashCommands.set(pullSlashCommands.name, pullSlashCommands);
                console.log(`✅ [slashCommands HANDLER] Comando ${file} carregado com sucesso! `.blue.bold);
            } else {
                console.log(`❌ [slashCommands HANDLER] Comando ${file} falhou! `.red.bold);
                continue;
            }
    
            if (pullSlashCommands.aliases && Array.isArray(pullSlashCommands.aliases)) pullSlashCommands.aliases.forEach(alias => client.aliases.set(alias, pullSlashCommands.name));
        }
    });
   

    // Commands Handler
    fs.readdirSync("./comandos/").forEach(dir => {
           
        const commands = fs.readdirSync(`./comandos/${dir}/`).filter(file => file.endsWith(".js"));
    
        for (let file of commands) {
            let pullCommands = require(`../comandos/${dir}/${file}`);
    
            if (pullCommands.name) {
                client.commands.set(pullCommands.name, pullCommands);
                console.log(`✅ [COMMAND HANDLER] Comando ${file} carregado com sucesso! `.green.bold);
            } else {
                console.log(`❌ [COMMAND HANDLER] Comando ${file} falhou! `.red.bold);
                continue;
            }
    
           
            if (pullCommands.aliases && Array.isArray(pullCommands.aliases)) pullCommands.aliases.forEach(alias => client.aliases.set(alias, pullCommands.name));
        }
    });


   
    // events handlers
    fs.readdirSync("./events/").forEach((file) => {
        const events = fs.readdirSync("./events/").filter((file) =>
          file.endsWith(".js")
        );
        for (let file of events) {
          let pullEvents = require(`../events/${file}`);
    
          if (pullEvents.name) {
                client.events.set(pullEvents.name, pull);
            }

        
    
        }
        console.log(`✅ [EVENT HANDLER] evento ${file} carregado com sucesso! `.yellow.bold);
    })
}
