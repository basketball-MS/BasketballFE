import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/Team';


@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.css']
})
export class TeamsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fakeTeamList: Array<any> = [
    {teamId: 1, location: "Austin", teamName: "Rangers", rosterSize: 12, gmId: 1, winRate: 100, pointsPg: 101, pointsAgPg: 90},
    {teamId: 2, location: "Tampa Bay", teamName: "Gators", rosterSize: 12, gmId: 2, winRate: 80, pointsPg: 99, pointsAgPg: 95}

  ]

  teamList: Team[] = [];
  
 


  
}
