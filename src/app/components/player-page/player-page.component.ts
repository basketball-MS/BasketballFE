import { Component, OnInit } from '@angular/core';
import { PlayerHttpService } from 'src/app/service/player-http.service';
import { Player } from 'src/app/models/Player';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent implements OnInit {

  constructor(private playerHttp: PlayerHttpService) { }

  ngOnInit(): void {
    this.displayAllPlayers();
  }

  PlayersList: Player[] = [];

  displayAllPlayers() {
    //This function will need to call our HTTP Service for returning all players
    this.playerHttp.getAllPlayers().subscribe(
      (response) => {
        //console.log(response);

        this.PlayersList = response.data;

      }
    );
  }

}
