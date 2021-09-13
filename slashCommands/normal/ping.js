module.exports = {
    name: 'testetbr',
    run: async(interaction) => {

        const text= interaction.options.getString('texto')

        return await interaction.reply({
            content: "Mensagem do Thithi: " + text,
        })
    }
}