import dayjs from 'dayjs';
import { MiscKeyword } from '../constants/keywords'
import { generate_uuid } from '../helpers/uuid_helper';
import { raid_model_map } from '../models/raid_model';
import { TimezoneModel, timezone_model_map } from '../models/timezone_model';

class Raid {
    // This is the id of the message that displays the raid in the Discord channel
    id: string;
    channelId: string;
    lead: string;
    difficulty: string;
    trial: string;
    date: string;
    time: string;
    timezone: TimezoneModel;
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
        
        const parsed_timezone = timezone_model_map.get(timezone);

        if (parsed_timezone == null) {
            throw new Error('Please contact the developer at ' + MiscKeyword.dev_discord_name_id + ' to have your timezone added to the pick list.');
        }

        
    }
}

export {
    Raid
}