import { RaidRoleKeyword, RaidTypeKeyord } from '../constants/keywords';
import { generate_uuid } from '../helpers/uuid_helper';
import { RaidRoleModel, raid_role_model_map } from './raid_role_model';

let raid_model_map = new Map<string, RaidModel>();

class RaidModel {
    id: string;
    abbreviation: string;
    name: string;
    non_hm: {
        expected_number_dps: number,
        support_roles: RaidRoleModel[],
        default_dps_roles: RaidRoleModel[]
    };
    hm: {
        expected_number_dps: number,
        support_roles: RaidRoleModel[],
        default_dps_roles: RaidRoleModel[]
    };

    constructor(abbreviation: string, name: string, expected_number_non_hm_dps: number,
        expected_number_hm_dps: number, support_roles_non_hm: RaidRoleModel[], support_roles_hm: RaidRoleModel[],
        default_dps_roles_non_hm: RaidRoleModel[], default_dps_roles_hm: RaidRoleModel[]) {
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
        this.id = generate_uuid(this.abbreviation);

        raid_model_map.set(this.id, this);
    }
}

new RaidModel(RaidTypeKeyord.aa, 'Aetherian Archive', 9, 9, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], RaidRoleModel.generate_dps_list(0, 0, 7, 2), RaidRoleModel.generate_dps_list(0, 0, 6, 3));

new RaidModel(RaidTypeKeyord.hrc, 'Hel-ra Citadel', 9, 8, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], RaidRoleModel.generate_dps_list(0, 0, 7, 2), RaidRoleModel.generate_dps_list(0, 0, 5, 3));

new RaidModel(RaidTypeKeyord.so, 'Sanctum Ophidia', 8, 8, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], RaidRoleModel.generate_dps_list(0, 0, 6, 2), RaidRoleModel.generate_dps_list(0, 0, 5, 3));

new RaidModel(RaidTypeKeyord.mol, 'Maw of Lorkhaj', 8, 8, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], RaidRoleModel.generate_dps_list(0, 0, 6, 2), RaidRoleModel.generate_dps_list(0, 0, 5, 3));

new RaidModel(RaidTypeKeyord.hof, 'Halls of Fabrication', 8, 8, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], RaidRoleModel.generate_dps_list(0, 0, 6, 2), RaidRoleModel.generate_dps_list(0, 0, 5, 3));

new RaidModel(RaidTypeKeyord.as0, 'Asylum Sanctorium +0', 8, 8, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.th),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.th),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh)], RaidRoleModel.generate_dps_list(0, 0, 6, 2), RaidRoleModel.generate_dps_list(0, 0, 5, 3));

new RaidModel(RaidTypeKeyord.as1, 'Asylum Sanctorium +1', 8, 8, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.th),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.th),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh)], RaidRoleModel.generate_dps_list(0, 0, 6, 2), RaidRoleModel.generate_dps_list(0, 0, 5, 3));

new RaidModel(RaidTypeKeyord.as2, 'Asylum Sanctorium +2', 8, 8, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.th),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.th),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh)], RaidRoleModel.generate_dps_list(0, 0, 6, 2), RaidRoleModel.generate_dps_list(0, 0, 5, 3));

new RaidModel(RaidTypeKeyord.cr0, 'Cloudrest +0', 8, 8, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.kh),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.kh),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh)], RaidRoleModel.generate_dps_list(0, 0, 6, 2), RaidRoleModel.generate_dps_list(0, 0, 5, 3));

new RaidModel(RaidTypeKeyord.cr1, 'Cloudrest +1', 7, 7, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.kh),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.kh),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh)], RaidRoleModel.generate_dps_list(0, 0, 5, 2), RaidRoleModel.generate_dps_list(0, 0, 4, 3));

new RaidModel(RaidTypeKeyord.cr2, 'Cloudrest +2', 7, 7, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.kh),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.kh),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh)], RaidRoleModel.generate_dps_list(0, 0, 5, 2), RaidRoleModel.generate_dps_list(0, 0, 4, 3));

new RaidModel(RaidTypeKeyord.cr3, 'Cloudrest +3', 7, 7, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.kh),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.kh),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh)], RaidRoleModel.generate_dps_list(0, 0, 5, 2), RaidRoleModel.generate_dps_list(0, 0, 4, 3));

new RaidModel(RaidTypeKeyord.ss, 'Sunspire', 8, 8, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], RaidRoleModel.generate_dps_list(0, 0, 6, 2), RaidRoleModel.generate_dps_list(0, 0, 5, 3));

new RaidModel(RaidTypeKeyord.ssl, 'Sunspire Lokke HM', 8, 8, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], RaidRoleModel.generate_dps_list(0, 0, 6, 2), RaidRoleModel.generate_dps_list(0, 0, 5, 3));

new RaidModel(RaidTypeKeyord.ssy, 'Sunspire Yoln HM', 8, 8, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], RaidRoleModel.generate_dps_list(0, 0, 6, 2), RaidRoleModel.generate_dps_list(0, 0, 5, 3));

new RaidModel(RaidTypeKeyord.ssly, 'Sunspire Lokke & Yoln HMs', 8, 8, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], RaidRoleModel.generate_dps_list(0, 0, 6, 2), RaidRoleModel.generate_dps_list(0, 0, 5, 3));

new RaidModel(RaidTypeKeyord.ka, 'Kyne\'s Aegis', 8, 8, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], RaidRoleModel.generate_dps_list(0, 0, 6, 2), RaidRoleModel.generate_dps_list(0, 0, 5, 3));

new RaidModel(RaidTypeKeyord.kay, 'Kyne\'s Aegis Yandir HM', 8, 8, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], RaidRoleModel.generate_dps_list(0, 0, 6, 2), RaidRoleModel.generate_dps_list(0, 0, 5, 3));

new RaidModel(RaidTypeKeyord.kayv, 'Kyne\'s Aegis Yandir & Vrol HMs', 8, 8, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], RaidRoleModel.generate_dps_list(0, 0, 6, 2), RaidRoleModel.generate_dps_list(0, 0, 5, 3));

new RaidModel(RaidTypeKeyord.rg, 'Rockgrove', 8, 8, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], RaidRoleModel.generate_dps_list(0, 0, 6, 2), RaidRoleModel.generate_dps_list(0, 0, 5, 3));

new RaidModel(RaidTypeKeyord.rgo, 'Rockgrove Oax HM', 8, 8, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], RaidRoleModel.generate_dps_list(0, 0, 6, 2), RaidRoleModel.generate_dps_list(0, 0, 5, 3));

new RaidModel(RaidTypeKeyord.rgob, 'Rockgrove Oax & Bahsei HM', 8, 8, [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot), RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1),
RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2)], RaidRoleModel.generate_dps_list(0, 0, 6, 2), RaidRoleModel.generate_dps_list(0, 0, 5, 3));

export {
    raid_model_map,
    RaidModel
}