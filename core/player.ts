class Player {
    // Actual discord id of the user
    id: string;
    raid_role_id: string;

    constructor(id: string, raid_role_id: string) {
        this.id = id;
        this.raid_role_id = raid_role_id;
    }
}

export {
    Player
}