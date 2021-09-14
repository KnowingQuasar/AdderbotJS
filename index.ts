// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js';
import { token } from './config.json';
import fs from 'fs';
import { IEvent } from './interfaces/ievent';

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const eventFiles = fs.readdirSync('./events/').filter(file => file.endsWith('.ts'));

for (const file of eventFiles) {
	const event: IEvent = require(`./events/${file}`).event;
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.login(token);
