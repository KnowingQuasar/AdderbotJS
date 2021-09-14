import { SlashCommandBuilder, SlashCommandIntegerOption, SlashCommandRoleOption, SlashCommandStringOption } from '@discordjs/builders';
import { APIMessage } from 'discord-api-types';
import { CommandInteraction, Message } from 'discord.js';
import { RaidDifficultyKeyword, RaidTypeKeyord, TimezoneKeyword } from '../constants/keywords';
import { ICommand } from '../interfaces/icommand';
import { Raid } from '../models/raid';
import { timezones } from '../models/time';

class CreateCommand implements ICommand {
    info = new SlashCommandBuilder()
        .setName('create')
        .setDescription('Create a raid');

    constructor() {
        this.info.addStringOption(new SlashCommandStringOption()
            .setName('difficulty')
            .setDescription('Select a trial difficulty')
            .setRequired(true)
            .addChoice('Veteran', RaidDifficultyKeyword.vet)
            .addChoice('Hardmode', RaidDifficultyKeyword.hm)
            .addChoice('Normal', RaidDifficultyKeyword.norm));

        this.info.addStringOption(new SlashCommandStringOption()
            .setName('trial')
            .setDescription('Select a trial')
            .setRequired(true)
            .addChoice('Aetherian Archive', RaidTypeKeyord.aa)
            .addChoice('Hel-ra Citadel', RaidTypeKeyord.hrc)
            .addChoice('Sanctum Ophidia', RaidTypeKeyord.so)
            .addChoice('Maw of Lorkhaj', RaidTypeKeyord.mol)
            .addChoice('Asylum Sanctorium +0', RaidTypeKeyord.as0)
            .addChoice('Asylum Sanctorium +1', RaidTypeKeyord.as1)
            .addChoice('Asylum Sanctorium +2', RaidTypeKeyord.as2)
            .addChoice('Cloudrest +0', RaidTypeKeyord.cr0)
            .addChoice('Cloudrest +1', RaidTypeKeyord.cr1)
            .addChoice('Cloudrest +2', RaidTypeKeyord.cr2)
            .addChoice('Cloudrest +3', RaidTypeKeyord.cr3)
            .addChoice('Sunspire', RaidTypeKeyord.ss)
            .addChoice('Sunspire Lokke HM', RaidTypeKeyord.ssl)
            .addChoice('Sunspire Yoln HM', RaidTypeKeyord.ssy)
            .addChoice('Sunspire Lokke & Yoln HM', RaidTypeKeyord.ssly)
            .addChoice('Kyne\'s Aegis', RaidTypeKeyord.ka)
            .addChoice('Kyne\'s Aegis Yandir HM', RaidTypeKeyord.kay)
            .addChoice('Kyne\'s Aegis Yandir & Vrol HM', RaidTypeKeyord.kavy)
            .addChoice('Rockgrove', RaidTypeKeyord.rg)
            .addChoice('Rockgrove Oax HM', RaidTypeKeyord.rgo)
            .addChoice('Rockgrove Oax & Bahsei HM', RaidTypeKeyord.rgob));

        this.info.addStringOption(new SlashCommandStringOption()
            .setName('date')
            .setDescription('Enter a date of the format Month/Day/Year (4 digits). For example: 4/20/2069')
            .setRequired(true));

        this.info.addStringOption(new SlashCommandStringOption()
            .setName('time')
            .setDescription('Enter a time with am/pm, like 11pm or 7am')
            .setRequired(true));

        let timezone_option = new SlashCommandStringOption();
        timezone_option.setName('timezone')
            .setDescription('Select a timezone')
            .setRequired(true);
        timezones.forEach(timezone => {
            timezone_option.addChoice(timezone.name, timezone.abbreviation);
        });

        this.info.addIntegerOption(new SlashCommandIntegerOption()
            .setName('melee_dps')
            .setDescription('The number of melee DPS for the raid')
            .setRequired(false));

        this.info.addIntegerOption(new SlashCommandIntegerOption()
            .setName('ranged_dps')
            .setDescription('The number of ranged DPS for the raid')
            .setRequired(false));

        this.info.addIntegerOption(new SlashCommandIntegerOption()
            .setName('flex_dps')
            .setDescription('The number of flex (ranged or melee) DPS for the raid')
            .setRequired(false));
            
        this.info.addIntegerOption(new SlashCommandIntegerOption()
            .setName('cro_dps')
            .setDescription('The number of necromancer DPS for the raid')
            .setRequired(false));
            
        this.info.addStringOption(new SlashCommandStringOption()
            .setName('roles')
            .setDescription('List the roles allowed for this raid separated by a comma. For example Role 1, Role 2, Role 3')
            .setRequired(true));
    }

    public async execute(interaction: CommandInteraction) {
        //let x: Message | APIMessage = await interaction.reply({ content: 'asdf', fetchReply: true });
        const raid = new Raid(interaction.channel.id, interaction.user.id, interaction.options.get('difficulty').value as string,
            interaction.options.get('trial').value as string, interaction.options.get('date').value as string,
            interaction.options.get('time').value as string, interaction.options.get('timezone').value as string,
            interaction.options.get('melee_dps').value as number, interaction.options.get('ranged_dps').value as number,
            interaction.options.get('flex_dps').value as number, interaction.options.get('cro_dps').value as number);

    }
}

const createCommand = new CreateCommand();

export {
    createCommand as command
}