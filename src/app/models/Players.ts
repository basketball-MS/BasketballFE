export class Players {

    id: number;
    firstname: string;
    lastname: string;
    position: string;
    height_feets: number;
    height_inches: number;
    weight: number;
    ppg: number;
    apg: number;
    spg: number;
    rpg: number;
    bpg: number;
    team_id: number;

    constructor (id: number, firstname: string, lastname: string, position: string, height_feets: number, height_inches: number, weight: number, ppg: number, apg: number, spg: number, rpg: number, bpg: number, team_id: number) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.position = position;
        this.height_feets = height_feets;
        this.height_inches = height_inches;
        this.weight = weight;
        this.team_id = team_id;
    }


}