import { Component, OnInit } from '@angular/core';
import { left } from '@popperjs/core';
import { Team } from 'src/app/models/Team';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import { Players } from 'src/app/models/Players';



@Component({
  selector: 'app-gm-home',
  templateUrl: './gm-home.component.html',
  styleUrls: ['./gm-home.component.css']
})
export class GMHomeComponent implements OnInit {

  constructor(private userHttp: UserService) { }

  ngOnInit(): void {
      this.displayTeam();
      // this.displayCoach();
  }

  firstName: string = "";
  lastName: string = "";
  coachList: User[] = [];
  teamList: Team[] = [];
  location: string = "";
  teamName: string = "";
  gmId: number = 1;
  ppg: number = 0;
  papg: number = 0;
  cID: number = 0;
  newName: string = "";
  newLoc: string = "";
  team_id: number = 0;
  playerToSign: number = 0;
  playersList: Players[] = [];
  cid: number = 0;
  

  addCoach() {

    let c: User = new User(0, this.firstName, this.lastName, "newCoach", "newCoachPassword", "newCoachEmail@gmail.com", "Coach");

    this.userHttp.addNewCoach(c).subscribe(
      (response) => {
        console.log(response);
        this.coachList.push(response);
        //this.cid = response.id;
      }
    )


}

addTeam() {

  let t: Team = new Team(0, this.location, this.teamName, 0, 1, 0, 0, 0);

  this.userHttp.addNewTeam(t).subscribe(
    (response) => {
      console.log(response);
      this.teamList.push(response);
    }
  )


}

deleteCoach() {
  
  let id = this.cID;

  this.userHttp.deleteCoach(id).subscribe(
    (response) => {
      console.log(response);
      this.coachList.pop();
    }
  )
}

changeTeamName() {
  let id = this.teamList[0].id;
  let name = this.newName;

  this.userHttp.changeTeamName(id, name).subscribe(
    (response) => {
      console.log(response);
    }
  )

}

changeTeamLoc() {
  let loc = this.newLoc;
  let id = this.teamList[0].id;

  this.userHttp.changeTeamLocation(id, loc).subscribe(
    (response) => {
      console.log(response);
    }
  )

}

displayTeam() {
  this.userHttp.getTeam(1).subscribe(
    (response) => {
      console.log(response);
      this.teamList[0] = response;

    }
  );
}

signPlayer() {

}

addPlayer() {

}

// displayCoach() {


//   this.userHttp.getThisCoach(this.cid).subscribe(
//     (response) => {
//       console.log(response);
//       this.coachList[0] = response;

//     }
//   )


// }

}
