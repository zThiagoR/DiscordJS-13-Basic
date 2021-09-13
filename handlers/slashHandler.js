/*

Esta função faz você realizar os comandos do slash commands feito em OBJETO

*/


async function createCmd(Client, guildId) {
    const data = [
            {
            name: 'testetbr',
            description: 'Clica no meu TBR!',
            options: [{
                name: 'texto',
                type: 'STRING',
                description: 'Enviar o texto',
                required: true,
            }],
        },
        {
            name: 'avatar',
            description: 'Visualizar seu avatar ou do usuário',
            options: [{
                name: 'usuário',
                type: 'USER',
                description: 'Visualizar seu avatar da melhor qualidade ou do outro usuário',
            }],
        }
    ]

    await Client.guilds.cache.get(guildId)?.commands.set(data)
}

module.exports = {createCmd}