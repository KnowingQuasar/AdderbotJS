import { v5 as uuidv5 } from 'uuid';
import { namespaceUuid } from '../config.json';

class RaidRoleInfo {
    abbreviation: string;
    name: string;
    id: string;

    constructor(name: string, description: string) {
        this.abbreviation = name;
        this.name = description;
        this.id = uuidv5(this.abbreviation, namespaceUuid);
    }
}

const raidRoles: RaidRoleInfo[] = [
    new RaidRoleInfo("T", "Tank"),
    new RaidRoleInfo("MT", "Main Tank"),
    new RaidRoleInfo("OT", "Off Tank"),
    new RaidRoleInfo("H", "Healer"),
    new RaidRoleInfo("H1", "Healer 1"),
    new RaidRoleInfo("H2", "Healer 2"),
    new RaidRoleInfo("CH", "Cage Healer"),
    new RaidRoleInfo("GH", "Group Healer"),
    new RaidRoleInfo("KH", "Kite Healer"),
    new RaidRoleInfo("TH", "Tank Healer"),
    new RaidRoleInfo("DPS", "Damage Dealer"),
    new RaidRoleInfo("RDPS", "Ranged Damage Dealer"),
    new RaidRoleInfo("MDPS", "Melee Damage Dealer"),
    new RaidRoleInfo("Cro", "Necromancer Damage Dealer"),
    new RaidRoleInfo("Backup DPS", "Backup Damage Dealer"),
    new RaidRoleInfo("Backup MDPS", "Backup Melee Damage Dealer"),
    new RaidRoleInfo("Backup RDPS", "Backup Ranged DPS"),
    new RaidRoleInfo("Backup T", "Backup Tank"),
    new RaidRoleInfo("Backup H", "Backup Healer")
]

export {
    raidRoles,
    RaidRoleInfo
}