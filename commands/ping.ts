import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { ICommand } from '../interfaces/icommand';

class PingCommand implements ICommand {
	info = new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!');

	public async execute(interaction: CommandInteraction) {
		await interaction.reply('Pong!');
	}
}

const pingCommand = new PingCommand();

export {
	pingCommand as command
}