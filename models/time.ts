import { TimezoneKeyword } from '../constants/keywords'

class Timezone {
    abbreviation: string;
    name: string;
    utc_offset: string;

    constructor(abbr: string, name: string, utc_offset: string) {
        this.abbreviation = abbr;
        this.name = name;
        this.utc_offset = utc_offset;
    }
}

const timezones = [
    new Timezone('EST', 'Eastern Standard Time', '-0500'),
    new Timezone('EDT', 'Eastern Daylight Time', '-0400'),
    new Timezone('CST', 'Central Standard Time', '-0600'),
    new Timezone('CDT', 'Central Daylight Time', '-0500'),
    new Timezone('MST', 'Mountain Standard Time', '-0700'),
    new Timezone('MDT', 'Mountain Daylight Time', '-0600'),
    new Timezone('PST', 'Pacific Standard Time', '-0800'),
    new Timezone('PDT', 'Pacific Daylight Time', '-0700')
]

function get_timezone_from_str(timezone_representation: string): Timezone {
    timezones.forEach(timezone => {
        if (timezone.abbreviation == timezone_representation || timezone.name == timezone_representation 
            || timezone.utc_offset == timezone_representation) {
            return timezone;
        }
    });

    return null;
}

export {
    Timezone,
    timezones,
    get_timezone_from_str
}