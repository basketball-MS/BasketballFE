import { Component, OnInit } from '@angular/core';
import { lineup } from 'src/app/models/lineup';
import { Players } from 'src/app/models/Players';
import { PlayerHttpService } from 'src/app/service/player-http.service';

@Component({
  selector: 'app-coach-home',
  templateUrl: './coach-home.component.html',
  styleUrls: ['./coach-home.component.css']
})
export class CoachHomeComponent implements OnInit {

  constructor(private playerHttp: PlayerHttpService) { }

  ngOnInit(): void {
    this.displayPlayers();
  }

   
  
    selectedRowIds: Set<number> = new Set<number>();
  
    playersList: any[] = [
      {playerId: 1, firstname:'Lebron', lastname: 'James', position: 'SF', time:'30'},
      {playerId: 2, firstname:'Kyrie', lastname: 'Irving', position: 'PG', time:'30'}
     
    ];
  
    selectedId: string;

    position: string = "";
    minutes: number = 0;
    selector: number = 0;
    playerList: Players[] = [];
    name: string = "";
    selectPlayer1: number = 0;
    selectPlayer2: number = 0;
    selectPlayer3: number = 0;
    selectPlayer4: number = 0;
    selectPlayer5: number = 0;
    successMsg: string = "";
  
    onRowClick(id: number) {
      if(this.selectedRowIds.has(id)) {
       this.selectedRowIds.delete(id);
      }
      else {
        this.selectedRowIds.add(id);
      }
    }
  
    rowIsSelected(id: number) {
      return this.selectedRowIds.has(id);
    }
  
    getSelectedRows(){

      return this.playerList.filter(x => this.selectedRowIds.has(x.id));

    }
  
    onLogClick() {
      console.log(this.getSelectedRows());

    }

    patchMinutes() {
      this.minutes = (<HTMLInputElement>document.getElementById("mins")).valueAsNumber;
      console.log(this.minutes);
    }

    patchPosition() {
      this.position = (<HTMLInputElement>document.getElementById("pos")).value;
      console.log(this.position);
    }

    displayPlayers() {
      this.playerHttp.getAllOurPlayers().subscribe(
        (response) => {
          //console.log(response);
  
          this.playerList = response;
  
        }
      );
      
    }

    postLineup() {
      this.successMsg = "Lineup saved";
      let ln: lineup = new lineup(0, this.name, this.selectPlayer1, this.selectPlayer2, this.selectPlayer3, this.selectPlayer4, this.selectPlayer5);
      this.playerHttp.addLineup(ln).subscribe(
        (response) => {
          console.log(response)
        }
      );

    }



}
