import fs from 'fs';
import { Raid } from '../core/raid';
import { data_path } from '../config.json';
import { classToPlain, plainToClass} from 'class-transformer';

export class AdderbotDataHelper {
    public static replacer(key: string, value: any[]): any {
        if (value instanceof Map) {
            return {
                dataType: 'Map',
                value: Array.from(value.entries()), // or with spread: value: [...value]
            };
        } else {
            return value;
        }
    }

    public static reviver(key: string, value: any): Map<string, any> {
        if (typeof value === 'object' && value !== null) {
            if (value.dataType === 'Map') {
                return new Map(value.value);
            }
        }
        return value;
    }


    public static read_all(): Map<string, Raid[]> {

        return null;
    }

    public static read_raid_from_file(guild_id: string, raid_id: string): Raid {
        let x = fs.readFileSync(data_path);
        let z = plainToClass(Map, JSON.parse(x.toString()));
        return null;
    }

    public static write_raid_to_file(guild_id: string, raid: Raid): boolean {
        let x = new Map<string, Raid[]>();
        x.set(guild_id, [raid]);
        fs.writeFileSync(data_path, JSON.stringify(classToPlain(x)));
        return true;
    }
}