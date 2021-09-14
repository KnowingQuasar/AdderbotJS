import { v5 as uuidv5 } from 'uuid';
import { namespaceUuid } from '../config.json';
import { RaidRoleKeyword } from '../constants/keywords';

class RaidRoleInfo {
    abbreviation: string;
    name: string;
    id: string;

    constructor(name: string, description: string) {
        this.abbreviation = name;
        this.name = description;
        this.id = uuidv5(this.abbreviation, namespaceUuid);
    }

    /**
    * generate_dps_list
    */
    public static generate_dps_list(melee_num: number, ranged_num: number, flex_num: number,
        cro_num: number): RaidRoleInfo[] {
        let raid_role_dps: RaidRoleInfo[] = [];
        for (let i = 0; i < melee_num; i++) {
            raid_role_dps.push(raid_roles.get(RaidRoleKeyword.mdps));
        }
        for (let i = 0; i < ranged_num; i++) {
            raid_role_dps.push(raid_roles.get(RaidRoleKeyword.rdps));
        }
        for (let i = 0; i < flex_num; i++) {
            raid_role_dps.push(raid_roles.get(RaidRoleKeyword.dps));
        }
        for (let i = 0; i < cro_num; i++) {
            raid_role_dps.push(raid_roles.get(RaidRoleKeyword.cro));
        }
        return raid_role_dps;
    }
}

const raid_roles = new Map();
raid_roles.set(RaidRoleKeyword.t, new RaidRoleInfo(RaidRoleKeyword.t, 'Tank'));
raid_roles.set(RaidRoleKeyword.mt, new RaidRoleInfo(RaidRoleKeyword.mt, 'Main Tank'));
raid_roles.set(RaidRoleKeyword.ot, new RaidRoleInfo(RaidRoleKeyword.ot, 'Off Tank'));
raid_roles.set(RaidRoleKeyword.h, new RaidRoleInfo(RaidRoleKeyword.h, 'Healer'));
raid_roles.set(RaidRoleKeyword.h1, new RaidRoleInfo(RaidRoleKeyword.h1, 'Healer 1'));
raid_roles.set(RaidRoleKeyword.h2, new RaidRoleInfo(RaidRoleKeyword.h2, 'Healer 2'));
raid_roles.set(RaidRoleKeyword.ch, new RaidRoleInfo(RaidRoleKeyword.ch, 'Cage Healer'));
raid_roles.set(RaidRoleKeyword.gh, new RaidRoleInfo(RaidRoleKeyword.gh, 'Group Healer'));
raid_roles.set(RaidRoleKeyword.th, new RaidRoleInfo(RaidRoleKeyword.th, 'Tank Healer'));
raid_roles.set(RaidRoleKeyword.kh, new RaidRoleInfo(RaidRoleKeyword.kh, 'Kite Healer'));
raid_roles.set(RaidRoleKeyword.dps, new RaidRoleInfo(RaidRoleKeyword.dps, 'Damage Dealer'));
raid_roles.set(RaidRoleKeyword.rdps, new RaidRoleInfo(RaidRoleKeyword.rdps, 'Ranged Damage Dealer'));
raid_roles.set(RaidRoleKeyword.mdps, new RaidRoleInfo(RaidRoleKeyword.mdps, 'Melee Damage Dealer'));
raid_roles.set(RaidRoleKeyword.cro, new RaidRoleInfo(RaidRoleKeyword.cro, 'Necromancer Damage Dealer'));
raid_roles.set(RaidRoleKeyword.backup_dps, new RaidRoleInfo(RaidRoleKeyword.backup_dps, 'Backup Damage Dealer'));
raid_roles.set(RaidRoleKeyword.backup_mdps, new RaidRoleInfo(RaidRoleKeyword.backup_mdps, 'Backup Melee Damage Dealer'));
raid_roles.set(RaidRoleKeyword.backup_rdps, new RaidRoleInfo(RaidRoleKeyword.backup_rdps, 'Backup Ranged Damage Dealer'));
raid_roles.set(RaidRoleKeyword.backup_tank, new RaidRoleInfo(RaidRoleKeyword.backup_tank, 'Backup Tank'));
raid_roles.set(RaidRoleKeyword.backup_heal, new RaidRoleInfo(RaidRoleKeyword.backup_heal, 'Backup Healer'));
raid_roles.set(RaidRoleKeyword.backup_cro, new RaidRoleInfo(RaidRoleKeyword.backup_cro, 'Backup Necromancer Damage Dealer'));

export {
    raid_roles,
    RaidRoleInfo
}