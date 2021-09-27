import { SlashCommandBuilder, SlashCommandIntegerOption, SlashCommandRoleOption, SlashCommandStringOption } from '@discordjs/builders';
import { APIMessage } from 'discord-api-types';
import { CommandInteraction, Message, MessageEmbed } from 'discord.js';
import { RaidDifficultyKeyword, RaidTypeKeyord, TimezoneKeyword } from '../constants/keywords';
import { ICommand } from '../interfaces/icommand';
import { Raid } from '../core/raid';
import { raid_model_map } from '../models/raid_model';
import { timezone_model_map } from '../models/timezone_model';

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

        let raid_type_option = new SlashCommandStringOption()
            .setName('trial')
            .setDescription('Select a trial')
            .setRequired(true);
        raid_model_map.forEach(raid_type => {
            raid_type_option.addChoice(raid_type.name, raid_type.id);
        });
        this.info.addStringOption(raid_type_option);

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
        timezone_model_map.forEach(timezone => {
            timezone_option.addChoice(timezone.name, timezone.id);
        });
        this.info.addStringOption(timezone_option);

        this.info.addStringOption(new SlashCommandStringOption()
            .setName('roles')
            .setDescription('List the roles allowed for this raid separated by a comma. For example Role 1, Role 2, Role 3')
            .setRequired(true));

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
    }

    public async execute(interaction: CommandInteraction) {
        //let x: Message | APIMessage = await interaction.reply({ content: 'asdf', fetchReply: true });
        const raid = await Raid.create(interaction.guild.roles, interaction.channel.id, interaction.user.id, interaction.options.get('difficulty').value as string,
            interaction.options.get('trial').value as string, interaction.options.get('date').value as string,
            interaction.options.get('time').value as string, interaction.options.get('timezone').value as string,
            interaction.options.get('roles').value as string, interaction.options.get('melee_dps')?.value as number, interaction.options.get('ranged_dps')?.value as number,
            interaction.options.get('flex_dps')?.value as number, interaction.options.get('cro_dps')?.value as number);

        interaction.reply(
            {
                content: 'Successfully created raid in this channel!'
            }
        );

        interaction.deleteReply();

        raid.id = (await interaction.channel.send(
            {
                content: await raid.build_discord_role_ping(interaction.guild.roles),
                embeds: [await raid.build_embed(interaction.client.users)]
            }
        )).id;

    }
}

const createCommand = new CreateCommand();

export {
    createCommand as command
}