export class Player {

    id: number;
    first_name: string;
    last_name: string;
    position: string;
    height_feet: number;
    height_inches: number;
    weight_pounds: number;

    constructor (id: number, first_name: string, last_name: string, position: string, height_feet: number, height_inches: number, weight_pounds: number) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.position = position;
        this.height_feet = height_feet;
        this.height_inches = height_inches;
        this.weight_pounds = weight_pounds;
    }


}