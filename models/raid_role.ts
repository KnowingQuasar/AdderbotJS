import { v5 as uuidv5 } from 'uuid';
import { namespaceUuid } from '../config.json';

class RaidRole {
    name: string;
    description: string;
    id: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
        this.id = uuidv5(this.name, namespaceUuid);
    }
}

const raidRoles: RaidRole[] = [
    new RaidRole("T", "Tank"),
    new RaidRole("MT", "Main Tank"),
    new RaidRole("OT", "Off Tank"),
    new RaidRole("H", "Healer"),
    new RaidRole("H1", "Healer 1"),
    new RaidRole("H2", "Healer 2"),
    new RaidRole("CH", "Cage Healer"),
    new RaidRole("GH", "Group Healer"),
    new RaidRole("KH", "Kite Healer"),
    new RaidRole("TH", "Tank Healer"),
    new RaidRole("DPS", "Damage Dealer"),
    new RaidRole("RDPS", "Ranged Damage Dealer"),
    new RaidRole("MDPS", "Melee Damage Dealer"),
    new RaidRole("Cro", "Necromancer Damage Dealer"),
    new RaidRole("Backup DPS", "Backup Damage Dealer"),
    new RaidRole("Backup MDPS", "Backup Melee Damage Dealer"),
    new RaidRole("Backup RDPS", "Backup Ranged DPS"),
    new RaidRole("Backup T", "Backup Tank"),
    new RaidRole("Backup H", "Backup Healer")
]

export {
    raidRoles
}