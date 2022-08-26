import { Component } from '@angular/core';
import { useAnimation } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BasketBall MS';

  public isLoggedIn: boolean = false;

  username: string = '';

  updateUserInfo(username: string): void {
    this.username = username;
  }


  signOut() {
    window.location.reload();
  }



}
