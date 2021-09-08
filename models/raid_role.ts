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

let raidRoles = [
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
    new RaidRole("CRO", "Necromancer Damage Dealer"),
    new RaidRole("ALT DPS", "Backup Damage Dealer"),
    new RaidRole("ALT MDPS", "Backup Melee Damage Dealer"),
    new RaidRole("ALT RDPS", "Backup Ranged DPS"),
    new RaidRole("ALT TANK", "Backup Tank"),
    new RaidRole("ALT HEALER", "Backup Healer")
]

export {
    raidRoles
}