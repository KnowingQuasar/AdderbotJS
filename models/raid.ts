import dayjs from 'dayjs';
import { get_timezone_from_str, Timezone } from '../models/time'
import { MiscKeyord } from '../constants/keywords'
import { raid_type_info } from './raid_info';

class Raid {
    channelId: string;
    messageId: string;
    lead: string;
    difficulty: string;
    trial: string;
    date: string;
    time: string;
    timezone: Timezone;
    players: any;
    headline: string;
    headline_override: boolean = false;

    constructor(channelId: string, lead: string, difficulty: string, 
        trial: string, date: string, time: string, timezone: string,
        num_melee: number, num_ranged: number, num_flex: number, num_cros: number) {
        this.channelId = channelId;
        this.lead = lead;
        this.difficulty = difficulty;
        this.trial = trial;
        this.date = date;
        this.time = time;
        
        const parsed_timezone = get_timezone_from_str(timezone);

        if (parsed_timezone == null) {
            throw new Error('Please contact the developer at ' + MiscKeyord.dev_discord_name_id + ' to have your timezone added to the pick list.');
        }

        let x = raid_type_info[0];
    }
}

export {
    Raid
}