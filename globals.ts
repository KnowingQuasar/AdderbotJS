import fs from 'fs';
import { Collection } from 'discord.js';
import { ICommand } from './models/command';

const commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.ts'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`).command;
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	commands.set(command.info.name, command);
}

export {
    commands
}