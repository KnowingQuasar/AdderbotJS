import dayjs from 'dayjs';
import { MiscKeyword, RaidDifficultyKeyword } from '../constants/keywords'
import { raid_model_map } from '../models/raid_model';
import { Player } from './player';
import { RaidRoleModel, raid_role_model_map } from '../models/raid_role_model';
import { TimezoneModel, timezone_model_map } from '../models/timezone_model';
import { Client, ColorResolvable, MessageEmbed, Role, RoleManager, UserManager } from 'discord.js';
import { AdderbotDataHelper } from '../helpers/data_helper';

class Raid {
    // raid is the id of the message that displays the raid in the Discord channel
    id: string;
    channelId: string;
    lead: string;
    difficulty: string;
    trial_id: string;
    date: string;
    time: string;
    timezone: TimezoneModel;
    headline: string;
    headline_override: boolean = false;
    raid_roles: Map<string, {current_available: number, active_players: Player[]}>;
    discord_ranks: string[] = [];

    private setup_raid_roles(raid_model_roles: Map<string, number>): Map<string, {current_available: number, active_players: Player[]}> {
        let return_altered_raid_roles = new Map<string, {current_available: number, active_players: Player[]}>();
        
        raid_model_roles.forEach((value, key) => {
            return_altered_raid_roles.set(key, {current_available: value, active_players: []});
        });

        return return_altered_raid_roles;
    }

    public static async create(role_manager: RoleManager, channelId: string, lead: string, difficulty: string,
        trial: string, date: string, time: string, timezone: string, ranks: string,
        num_melee?: number, num_ranged?: number, num_flex?: number, num_cros?: number): Promise<Raid> {

        let raid = new Raid();

        raid.channelId = channelId;
        raid.lead = lead;
        raid.difficulty = difficulty;
        raid.trial_id = trial;
        raid.date = date;
        raid.time = time;

        const parsed_timezone = timezone_model_map.get(timezone);

        if (parsed_timezone == null) {
            throw new Error('Please contact the developer at ' + MiscKeyword.dev_discord_name_id + ' to have your timezone added to the pick list.');
        }

        let selected_raid_model = raid_model_map.get(raid.trial_id);

        if (difficulty === RaidDifficultyKeyword.hm) {
            raid.raid_roles = raid.setup_raid_roles(selected_raid_model.hm.raid_roles);
        } else {
            raid.raid_roles = raid.setup_raid_roles(selected_raid_model.non_hm.raid_roles);
        }

        let discord_rank_map = await role_manager.fetch();

        let rank_map = new Map<string, string>();
        discord_rank_map.forEach(role => {
            rank_map.set(role.name, role.id);
        });

        let pre_parsed_ranks = ranks.split(',');
        pre_parsed_ranks.forEach(pre_parsed_rank => {
            let parsed_rank_id = rank_map.get(pre_parsed_rank.trim());
            if (parsed_rank_id !== undefined && parsed_rank_id !== null) {
                raid.discord_ranks.push(parsed_rank_id);
                return;
            }
        });

        if(raid.discord_ranks.length == 0) {
            raid.discord_ranks.push(role_manager.everyone.id);
        }

        AdderbotDataHelper.write_raid_to_file(role_manager.guild.id, raid);
        AdderbotDataHelper.read_raid_from_file(role_manager.guild.id, raid.id);

        return raid;
    }

    public static creawteFromJsonObject(obj: Object) {

    }

    /**
     * async build_discord_role_ping
     */
    public async build_discord_role_ping(role_manager: RoleManager) {
        let discord_ranks_string = '';

        for (const discord_rank of this.discord_ranks) {
            discord_ranks_string += (await role_manager.fetch(discord_rank)).toString() + ' ';
        }

        return discord_ranks_string;
    }

    /**
     * async build_embed
     */
    public async build_embed(user_manager: UserManager): Promise<MessageEmbed> {
        let embed = new MessageEmbed()
            .setColor(raid_model_map.get(this.trial_id).embed_color as ColorResolvable);

        let content = '**Trial:** ' + raid_model_map.get(this.trial_id).name + '\n';
        content += '**Date:** ' + this.date + '\n';
        content += '**Time:** ' + this.time + '\n';
        content += '**Leader:** ' + (await user_manager.fetch(this.lead)).toString() + '\n';
        content += '**-----------------------------------------------**\n'

        for (const [key, value] of this.raid_roles) {
            for (const active_player of value.active_players) {
                content += '**' + raid_role_model_map.get(key).abbreviation + ':** ' + (await user_manager.fetch(active_player.id)).toString() + '\n';
            }

            for (let i = 0; i < value.current_available; i++) {
                content += '**' + raid_role_model_map.get(key).abbreviation + ':**\n';
            }
        }

        

        embed.setDescription(content);

        return embed;
    }
}

export {
    Raid
}