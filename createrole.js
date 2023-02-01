const { SlashCommandBuilder, Colors } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('createrole')
		.setDescription('Creates a new role')
		.addStringOption(option =>
			option.setName('name')
				.setDescription('The name of the role'))
		.addStringOption(option =>
			option.setName('color')
				.setDescription('Hexcode of the desired color')),
		
	async execute(interaction) {
		const name = interaction.options.getString('name');
		const color = interaction.options.getString('color');
		// Create a new role
		interaction.guild.roles.create({
			name: name,
			color: color,
		})
			.then(console.log)
			.catch(console.error);

		await interaction.reply('New role created!');
	},
};