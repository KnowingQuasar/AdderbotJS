import { CommandInteraction, TextChannel } from "discord.js";
import { commands } from "../deploy-commands";
import { IEvent } from "../models/interfaces/ievent";

class InteractionCreateEvent implements IEvent {
    name = 'interactionCreate';
    once = false;
    public async execute(...args: CommandInteraction[]) {
        const interaction: CommandInteraction = args[0];
        // console.log(`${interaction.user.tag} in #${(interaction.channel as TextChannel).name} triggered an interaction.`);
        const command: any = commands.get(interaction.commandName);

        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
}

const interactionCreateEvent = new InteractionCreateEvent();

export {
    interactionCreateEvent as event
}


// module.exports = {
// 	name: 'interactionCreate',
// 	execute(interaction) {
// 		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
// 	},
// };