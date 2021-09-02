import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { ICommand } from '../models/command';

class SignupCommand implements ICommand {
    info: SlashCommandBuilder;

    constructor() {
        // Do the basics
        this.info = new SlashCommandBuilder()
            .setName('signup')
            .setDescription('Sign up for a raid!');
        // Add Options
        this.info
            .addStringOption(option =>
                option.setName('role')
                    .setDescription('The role you want to sign up for in the raid')
                    .setRequired(true)
                    .addChoice('DPS', 'dps')
                    .addChoice('Ranged DPS', 'rdps')
                    .addChoice('Melee DPS', 'mdps')
                    .addChoice('Healer', 'h'));
    }

    public async execute(interaction: CommandInteraction) {
        await interaction.reply('Signup!');
    }
}

const signupCommand = new SignupCommand();

export {
    signupCommand as command
}