import { Client } from "discord.js";
import { IEvent } from "../models/interfaces/ievent";

class ReadyEvent implements IEvent {
	name = 'ready';
	once = true;
	public async execute(...args: Client[]) {
		console.log(`Ready! Logged in as ${args[0].user.tag}`);
	}
}

const readyEvent = new ReadyEvent();


export {
	readyEvent as event
}