import { SlashCommandBuilder, SlashCommandStringOption } from '@discordjs/builders';
import { APIMessage } from 'discord-api-types';
import { CommandInteraction, Message } from 'discord.js';
import { ICommand } from '../interfaces/icommand';
import { raid_role_model_map } from '../models/raid_role_model';

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

        raid_role_model_map.forEach(raidRole => {
            roleOption.addChoice(raidRole.name + ' (' + raidRole.abbreviation + ')', raidRole.id);
        });

        this.info.addStringOption(roleOption);
        this.info.addStringOption(new SlashCommandStringOption()
            .setName("emote")
            .setDescription("Select an emote for the class you are bringing")
            .setRequired(false));
    }

    public async execute(interaction: CommandInteraction) {
        let x : Message | APIMessage = await interaction.reply({ content: 'Signup!', fetchReply: true });
        if(x instanceof Message) {
            x = x as Message;
            let z = await x.channel.messages.fetch('885304382730670120');
            let a = 'asdf';
            let kk = await z.edit('muffin has no power over me');
        }
    }
}

const signupCommand = new SignupCommand();

export {
    signupCommand as command
}