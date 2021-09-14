import { RaidRoleKeyword, RaidTypeKeyord } from '../constants/keywords';
import { RaidRoleInfo, raid_roles } from './raid_role_info';

class RaidInfo {
    abbreviation: string;
    name: string;
    non_hm: {
        expected_number_dps: number,
        support_roles: RaidRoleInfo[],
        default_dps_roles: RaidRoleInfo[]
    };
    hm: {
        expected_number_dps: number,
        support_roles: RaidRoleInfo[],
        default_dps_roles: RaidRoleInfo[]
    };

    constructor(abbreviation: string, name: string, expected_number_non_hm_dps: number,
        expected_number_hm_dps: number, support_roles_non_hm: RaidRoleInfo[], support_roles_hm: RaidRoleInfo[],
        default_dps_roles_non_hm: RaidRoleInfo[], default_dps_roles_hm: RaidRoleInfo[]) {
        this.abbreviation = abbreviation;
        this.name = name;
        this.non_hm = {
            'expected_number_dps': expected_number_non_hm_dps,
            'support_roles': support_roles_non_hm,
            'default_dps_roles': default_dps_roles_non_hm
        }
        this.hm = {
            'expected_number_dps': expected_number_hm_dps,
            'support_roles': support_roles_hm,
            'default_dps_roles': default_dps_roles_hm
        }
    }
}

const raid_type_info: RaidInfo[] = [
    new RaidInfo(RaidTypeKeyord.aa, 'Aetherian Archive', 9, 9, [raid_roles.get(RaidRoleKeyword.mt), raid_roles.get(RaidRoleKeyword.h1),
    raid_roles.get(RaidRoleKeyword.h2)], [raid_roles.get(RaidRoleKeyword.mt), raid_roles.get(RaidRoleKeyword.h1),
    raid_roles.get(RaidRoleKeyword.h2)], RaidRoleInfo.generate_dps_list(0, 0, 7, 2), RaidRoleInfo.generate_dps_list(0, 0, 6, 3))


]

export {
    raid_type_info
}