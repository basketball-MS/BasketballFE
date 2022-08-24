export class Team {

    teamId: number;
    location: string;
    teamName: string;
    rosterSize: number;
    gmId: number;
    winRate: number;
    pointsPg: number;
    pointsAgPg: number;


    constructor(teamId: number, location: string, teamName: string, rosterSize: number, gmId: number, winRate: number, pointsPg: number, pointsAgPg: number) {
        this.teamId = teamId;
        this.location = location;
        this.teamName = teamName;
        this.rosterSize = rosterSize;
        this.gmId = gmId;
        this.winRate = winRate;
        this.pointsPg = pointsPg;
        this.pointsAgPg = pointsAgPg;
    }


}