import { RaidRoleKeyword } from '../constants/keywords';
import { generate_uuid } from '../helpers/uuid_helper';

let raid_role_model_map = new Map<string, RaidRoleModel>();

class RaidRoleModel {
    id: string;
    abbreviation: string;
    name: string;

    constructor(name: string, description: string) {
        this.abbreviation = name;
        this.name = description;
        this.id = generate_uuid(this.abbreviation);

        raid_role_model_map.set(this.id, this);
    }

    public static find_role_by_abbreviation(abbr: string): RaidRoleModel {
        let returned_role_model: RaidRoleModel = null;

        raid_role_model_map.forEach(raid_role_model => {
            if(raid_role_model.abbreviation === abbr) {
                returned_role_model = raid_role_model;
                return;
            }
        });

        return returned_role_model;
    }

    /**
    * generate_dps_list
    */
    public static generate_dps_list(melee_num: number, ranged_num: number, flex_num: number,
        cro_num: number): RaidRoleModel[] {
        let raid_role_dps: RaidRoleModel[] = [];
        for (let i = 0; i < melee_num; i++) {
            raid_role_dps.push(RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mdps));
        }
        for (let i = 0; i < ranged_num; i++) {
            raid_role_dps.push(RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.rdps));
        }
        for (let i = 0; i < flex_num; i++) {
            raid_role_dps.push(RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps));
        }
        for (let i = 0; i < cro_num; i++) {
            raid_role_dps.push(RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro));
        }
        return raid_role_dps;
    }
}

new RaidRoleModel(RaidRoleKeyword.t, 'Tank');
new RaidRoleModel(RaidRoleKeyword.mt, 'Main Tank');
new RaidRoleModel(RaidRoleKeyword.ot, 'Off Tank');
new RaidRoleModel(RaidRoleKeyword.h, 'Healer');
new RaidRoleModel(RaidRoleKeyword.h1, 'Healer 1');
new RaidRoleModel(RaidRoleKeyword.h2, 'Healer 2');
new RaidRoleModel(RaidRoleKeyword.ch, 'Cage Healer');
new RaidRoleModel(RaidRoleKeyword.gh, 'Group Healer');
new RaidRoleModel(RaidRoleKeyword.th, 'Tank Healer');
new RaidRoleModel(RaidRoleKeyword.kh, 'Kite Healer');
new RaidRoleModel(RaidRoleKeyword.dps, 'Damage Dealer');
new RaidRoleModel(RaidRoleKeyword.rdps, 'Ranged Damage Dealer');
new RaidRoleModel(RaidRoleKeyword.mdps, 'Melee Damage Dealer');
new RaidRoleModel(RaidRoleKeyword.cro, 'Necromancer Damage Dealer');
new RaidRoleModel(RaidRoleKeyword.backup_dps, 'Backup Damage Dealer');
new RaidRoleModel(RaidRoleKeyword.backup_mdps, 'Backup Melee Damage Dealer');
new RaidRoleModel(RaidRoleKeyword.backup_rdps, 'Backup Ranged Damage Dealer');
new RaidRoleModel(RaidRoleKeyword.backup_tank, 'Backup Tank');
new RaidRoleModel(RaidRoleKeyword.backup_heal, 'Backup Healer');
new RaidRoleModel(RaidRoleKeyword.backup_cro, 'Backup Necromancer Damage Dealer');

export {
    raid_role_model_map,
    RaidRoleModel
}