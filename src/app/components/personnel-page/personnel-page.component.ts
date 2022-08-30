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
  }

  playerToSign: number = 0;
  playerToCut: number = 0;
  playersList: Players[] = [];

  displayPlayers() {
    this.playerHttp.getAllOurPlayers().subscribe(
      (response) => {
        //console.log(response);

        this.playersList = response.data;

      }
    );


  }

  signPlayer() {


  }

  cutPlayer() {
    let id = this.playerToCut;

  this.playerHttp.deletePlayer(id).subscribe(
    (response) => {
      console.log(response);
      this.playersList.pop();
    }
  )

  }

}
