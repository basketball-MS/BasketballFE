import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import { Players } from 'src/app/models/Players';
import { PlayerHttpService } from 'src/app/service/player-http.service';

@Component({
  selector: 'app-personnel-page',
  templateUrl: './personnel-page.component.html',
  styleUrls: ['./personnel-page.component.css']
})
export class PersonnelPageComponent implements OnInit {

  constructor(private playerHttp: PlayerHttpService) { }

  ngOnInit(): void {
    this.displayPlayers();
  }

  playerToSign: number = 0;
  playerToCut: number = 0;
  playersList: Players[] = [];
  newHeightFt: number = 0;
  newHeightIn: number = 0;
  newWeight: number = 0;
  selectPlayer: number = 0;
  newTeamId: number = 0;


  displayPlayers() {
    this.playerHttp.getAllOurPlayers().subscribe(
      (response) => {
        //console.log(response);

        this.playersList = response;

      }
    );


  }

  changePlayerTeam() {
    let id = this.selectPlayer;
    let team_id = this.newTeamId
    this.playerHttp.changePlayerTeam(id, team_id).subscribe(
      (response) => {
        console.log(response);
      }
    );


  }

  cutPlayer() {
    let id = this.playerToCut;

  this.playerHttp.deletePlayer(id).subscribe(
    (response) => {
      console.log(response);
      this.playersList.splice((id-1), 1);
    }
  )

  }

  displayPlayer() {
    let id = this.selectPlayer;
    this.playerHttp.getPlayer(this.selectPlayer).subscribe(
      (response) => {
        console.log(response);
        this.playersList[(this.selectPlayer)-1] = response;
  
      }
    );


  }

  updatePlayerWeight() {
    let id = this.selectPlayer;
    let weight = this.newWeight;
    this.playerHttp.changeWeight(id, weight).subscribe(
      (response) => {
        console.log(response);
      }
    );


  }

  updatePlayerHtFt() {
    let id = this.selectPlayer;
    let height_feets = this.newHeightFt;
    this.playerHttp.changeHeightFt(id, height_feets).subscribe(
      (response) => {
        console.log(response);
      }
    );

  }

  updatePlayerHtIn() {
    let id = this.selectPlayer;
    let height_inches = this.newHeightIn;
    this.playerHttp.changeHeightIn(id, height_inches).subscribe(
      (response) => {
        console.log(response);
      }
    );

  }

}
