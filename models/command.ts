import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

class ICommand {
    info: SlashCommandBuilder;
    execute: (interaction: CommandInteraction) => Promise<void>;
}

export {
    ICommand
}