import { RaidRoleKeyword, RaidTypeKeyord } from '../constants/keywords';
import { generate_uuid } from '../helpers/uuid_helper';
import { RaidRoleModel, raid_role_model_map } from './raid_role_model';

let raid_model_map = new Map<string, RaidModel>();

class RaidModel {
    id: string;
    abbreviation: string;
    name: string;
    embed_color: string;

    non_hm: {
        expected_number_dps: number;
        raid_roles: Map<string, number>;
    }

    hm: {
        expected_number_dps: number;
        raid_roles: Map<string, number>;
    }

    constructor(abbreviation: string, name: string, embed_color: string, expected_number_non_hm_dps?: number,
        raid_roles_non_hm?: Map<string, number>, expected_number_hm_dps?: number, raid_roles_hm?: Map<string, number>) {
        this.abbreviation = abbreviation;
        this.name = name;
        this.embed_color = embed_color;

        if (expected_number_non_hm_dps == null && expected_number_hm_dps == null
            && raid_roles_non_hm == null && raid_roles_hm == null) {
            throw Error('Invalid Raid Model created. Needs a HM or Non-HM representation');
        }

        if (expected_number_non_hm_dps !== null && raid_roles_non_hm !== null) {
            this.non_hm = {
                expected_number_dps: expected_number_non_hm_dps,
                raid_roles: raid_roles_non_hm
            }
        } else {
            this.non_hm = null;
        }

        if (expected_number_hm_dps !== null && raid_roles_hm !== null) {
            this.hm = {
                expected_number_dps: expected_number_hm_dps,
                raid_roles: raid_roles_hm
            }
        } else {
            this.hm = null;
        }

        this.id = generate_uuid(this.abbreviation);
        raid_model_map.set(this.id, this);
    }
}

new RaidModel(
    RaidTypeKeyord.aa, 'Aetherian Archive', 'AQUA',
    9, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps).id, 7],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 2]
    ]),
    9, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps).id, 6],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ])
);

new RaidModel(
    RaidTypeKeyord.hrc, 'Hel-ra Citadel', 'GREY',
    9, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps).id, 7],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 2]
    ]),
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps).id, 5],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ])
);

new RaidModel(
    RaidTypeKeyord.so, 'Sanctum Ophidia', 'GREEN',
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps).id, 6],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 2]
    ]),
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps).id, 5],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ])
);

new RaidModel(
    RaidTypeKeyord.mol, 'Maw of Lorkhaj', 'PURPLE',
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mdps).id, 2],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 2],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.rdps).id, 4]
    ]),
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mdps).id, 2],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 2],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.rdps).id, 4]
    ])
);

new RaidModel(
    RaidTypeKeyord.hof, 'Halls of Fabrication', 'GOLD',
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps).id, 5],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ]),
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps).id, 5],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ])
);

new RaidModel(
    RaidTypeKeyord.as0, 'Asylum Sanctorium +0', 'DARK_GOLD',
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.th).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.rdps).id, 5],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ])
);

new RaidModel(
    RaidTypeKeyord.as1, 'Asylum Sanctorium +1', 'DARK_GOLD',
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.th).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.rdps).id, 5],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ])
);

new RaidModel(
    RaidTypeKeyord.as2, 'Asylum Sanctorium +2', 'DARK_GOLD',
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.th).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.rdps).id, 5],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ]),
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.th).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.rdps).id, 5],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ])
);

new RaidModel(
    RaidTypeKeyord.cr0, 'Cloudrest +0', 'DARK_PURPLE',
    7, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.kh).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.rdps).id, 4],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ])
);
new RaidModel(
    RaidTypeKeyord.cr1, 'Cloudrest +1', 'DARK_PURPLE',
    7, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.kh).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.rdps).id, 4],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ])
);
new RaidModel(
    RaidTypeKeyord.cr2, 'Cloudrest +2', 'DARK_PURPLE',
    7, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.kh).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.rdps).id, 4],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ])
);
new RaidModel(
    RaidTypeKeyord.cr3, 'Cloudrest +3', 'DARK_PURPLE',
    7, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.kh).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.rdps).id, 4],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ]),
    7, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.gh).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.kh).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.rdps).id, 4],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ])
);

new RaidModel(
    RaidTypeKeyord.ss, 'Sunspire', 'DARK_ORANGE',
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps).id, 5],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ]),
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps).id, 5],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ])
);

new RaidModel(
    RaidTypeKeyord.ssl, 'Sunspire Lokke HM', 'DARK_ORANGE',
    null, null,
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps).id, 5],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ])
);

new RaidModel(
    RaidTypeKeyord.ssy, 'Sunspire Yoln HM', 'DARK_ORANGE',
    null, null,
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps).id, 5],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ])
);

new RaidModel(
    RaidTypeKeyord.ssly, 'Sunspire Lokke & Yoln HM', 'DARK_ORANGE',
    null, null,
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps).id, 5],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ])
);

new RaidModel(
    RaidTypeKeyord.ka, 'Kyne\'s Aegis', 'DARK_RED',
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps).id, 5],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ]),
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps).id, 5],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ])
);

new RaidModel(
    RaidTypeKeyord.kay, 'Kyne\'s Aegis Yandir HM', 'DARK_RED',
    null, null,
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps).id, 5],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ])
);

new RaidModel(
    RaidTypeKeyord.kayv, 'Kyne\'s Aegis Yandir + Vrol HM', 'DARK_RED',
    null, null,
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps).id, 5],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ])
);

new RaidModel(
    RaidTypeKeyord.rg, 'Rockgrove', 'DARK_VIVID_PINK',
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps).id, 5],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ]),
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps).id, 5],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ])
);

new RaidModel(
    RaidTypeKeyord.rgo, 'Rockgrove Oax HM', 'DARK_VIVID_PINK',
    null, null,
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps).id, 5],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ])
);

new RaidModel(
    RaidTypeKeyord.rgob, 'Rockgrove Oax + Bahsei HM', 'DARK_VIVID_PINK',
    null, null,
    8, new Map<string, number>([
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.mt).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.ot).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h1).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.h2).id, 1],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.dps).id, 5],
        [RaidRoleModel.find_role_by_abbreviation(RaidRoleKeyword.cro).id, 3]
    ])
);

export {
    raid_model_map,
    RaidModel
}