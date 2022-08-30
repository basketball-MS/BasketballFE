export class Team {

    id: number;
    location: string;
    teamName: string;
    rosterSize: number;
    gmId: number;
    winRate: number;
    ppg: number;
    papg: number;


    constructor(id: number, location: string, teamName: string, rosterSize: number, gmId: number, winRate: number, ppg: number, papg: number) {
        this.id = id;
        this.location = location;
        this.teamName = teamName;
        this.rosterSize = rosterSize;
        this.gmId = gmId;
        this.winRate = winRate;
        this.ppg = ppg;
        this.papg = papg;
    }


}