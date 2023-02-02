const { SlashCommandBuilder } = require.discord.js;
const funcs = require('../helpers/functions');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('Create Category')

        .setDescription('Creates a new category')

        .addStringOption(option =>
            option.setName('name'))
                .setDescription('The Name of the category'),

    async execute(interaction){
        const name = interaction.options.getString('name');
        const catid = guild.id;
        funcs.guild.channels.create(name, catid, {type: "GUILD_CATEGORY"});

        await interaction.reply('New Category Created!');
        return catid;
    }
}