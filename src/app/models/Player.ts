export class Player {

    id: number;
    first_name: string;
    last_name: string;
    position: string;
    height_feet: number;
    height_inches: number;
    weight_pounds: number;
    team: any;
    team_id: number

    constructor (first_name: string, height_feet: number, height_inches: number, id: number, last_name: string, position: string, team: any, weight_pounds: number, team_id: number) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.position = position;
        this.height_feet = height_feet;
        this.height_inches = height_inches;
        this.weight_pounds = weight_pounds;
        this.team = team;
        this.team_id = team_id;
    }


}