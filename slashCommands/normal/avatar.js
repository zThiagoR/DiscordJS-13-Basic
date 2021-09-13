const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'avatar',
    run: async(interaction) => {

        const member = interaction.options.getUser('usuário') || interaction.user;

        const embed = new MessageEmbed() 
            .setDescription(`Avatar do ${member}`)
            .setImage(member.displayAvatarURL())

                return interaction.reply({
                embeds: [embed], 
                ephemeral: true // A mensagem do bot irá apenas mostrar pra você, caso retire esta linha, mostrará ao público.
            })
    }
}
