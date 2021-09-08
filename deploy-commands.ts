import fs from 'fs';

import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { clientId, devGuildId, token } from './config.json';
import { Collection } from 'discord.js';

const jsonCommands = [];
const commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.ts'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`).command;
	jsonCommands.push(command.info.toJSON());
	commands.set(command.info.name, command);
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		await rest.put(
			Routes.applicationGuildCommands(clientId, devGuildId),
			{ body: jsonCommands }
		);

		console.log('Successfully registered application commands.');
	}
	catch (error) {
		console.error(error);
	}
})();

export {
	commands
}