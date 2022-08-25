import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/Team';
import { Player } from 'src/app/models/Player';
import { PlayerHttpService } from 'src/app/service/player-http.service';


@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.css']
})
export class TeamsPageComponent implements OnInit {

  constructor(private playerHttp: PlayerHttpService) { }

  ngOnInit(): void {
    this.displayAllPlayers();
  }

  fakeTeamList: Array<any> = [
    {teamId: 1, location: "Austin", teamName: "Rangers", rosterSize: 12, gmId: 1, winRate: 100, pointsPg: 101, pointsAgPg: 90},
    {teamId: 2, location: "Tampa Bay", teamName: "Gators", rosterSize: 12, gmId: 2, winRate: 80, pointsPg: 99, pointsAgPg: 95}

  ]

  teamList: Team[] = [];
  PlayersList: Player[] = [];
  
  displayAllPlayers() {
    //This function will need to call our HTTP Service for returning all players
    this.playerHttp.getAllPlayers().subscribe(
      (response) => {
        //console.log(response);

        this.PlayersList = response.data;
        console.log(this.PlayersList[2].first_name);

      }
    );
  }


  
}
