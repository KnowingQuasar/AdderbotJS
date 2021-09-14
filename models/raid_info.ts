import { RaidRoleInfo } from './raid_role';

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
        this.non_hm.expected_number_dps = expected_number_non_hm_dps;
        this.hm.expected_number_dps = expected_number_hm_dps;
        this.non_hm.support_roles = support_roles_non_hm;
        this.hm.support_roles = support_roles_hm;
        this.non_hm.default_dps_roles = default_dps_roles_non_hm;
        this.hm.default_dps_roles = default_dps_roles_hm;
    }
}