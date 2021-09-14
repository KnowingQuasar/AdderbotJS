import { SlashCommandBuilder, SlashCommandStringOption } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { ICommand } from '../interfaces/icommand';
import { raid_roles } from '../models/raid_role_info';

class SignupCommand implements ICommand {
    info: SlashCommandBuilder;

    constructor() {
        // Do the basics
        this.info = new SlashCommandBuilder()
            .setName('signup')
            .setDescription('Sign up for a raid!');

        const roleOption = new SlashCommandStringOption()
            .setName('role')
            .setDescription('The role you want to sign up for in the raid')
            .setRequired(true);

        raid_roles.forEach(raidRole => {
            roleOption.addChoice(raidRole.name + ' (' + raidRole.abbreviation + ')', raidRole.abbreviation);
        });

        this.info.addStringOption(roleOption);
        this.info.addStringOption(new SlashCommandStringOption()
            .setName("emote")
            .setDescription("Select an emote for the class you are bringing")
            .setRequired(false));
    }

    public async execute(interaction: CommandInteraction) {
        await interaction.reply('Signup!');
    }
}

const signupCommand = new SignupCommand();

export {
    signupCommand as command
}