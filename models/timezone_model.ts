import { TimezoneKeyword } from '../constants/keywords';
import { generate_uuid } from '../helpers/uuid_helper';

const timezone_model_map = new Map<string, TimezoneModel>();

class TimezoneModel {
    id: string;
    abbreviation: string;
    name: string;
    utc_offset: string;

    constructor(abbr: string, name: string, utc_offset: string) {
        this.abbreviation = abbr;
        this.name = name;
        this.utc_offset = utc_offset;
        this.id = generate_uuid(this.abbreviation);

        timezone_model_map.set(this.id, this);
    }
}

new TimezoneModel(TimezoneKeyword.eastern_std_us, 'Eastern Standard Time', '-0500');
new TimezoneModel(TimezoneKeyword.eastern_dst_us, 'Eastern Daylight Time', '-0400');
new TimezoneModel(TimezoneKeyword.central_std_us, 'Central Standard Time', '-0600');
new TimezoneModel(TimezoneKeyword.central_dst_us, 'Central Daylight Time', '-0500');
new TimezoneModel(TimezoneKeyword.mountain_std_us, 'Mountain Standard Time', '-0700');
new TimezoneModel(TimezoneKeyword.mountain_dst_us, 'Mountain Daylight Time', '-0600');
new TimezoneModel(TimezoneKeyword.pacific_std_us, 'Pacific Standard Time', '-0800');
new TimezoneModel(TimezoneKeyword.pacific_dst_us, 'Pacific Daylight Time', '-0700');

export {
    TimezoneModel,
    timezone_model_map
}