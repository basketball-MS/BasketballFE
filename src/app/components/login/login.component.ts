import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../../app.component';
import { AuthService } from './../../service/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  isLoading = false;

  loginErrMsg = '';

  constructor(private authService: AuthService, private appComponent: AppComponent) { }

  login() {
    // calls the login() method from the
    //authService and passs thru the username and password

    // check for empty values
    if (!this.username.trim() || !this.password.trim()) {
      this.loginErrMsg = 'Failed Login';
      return;
    }

    // call the authService to hit /login endpoint
    this.isLoading = true;
    this.authService.login(this.username, this.password)
    .subscribe(
      (response) => {

        // set isloading to false
        this.isLoading = false;

        // build a token that we capture from the response headers (from Spring)
        console.log(response);

        let token: string | null  = response.headers.get('rolodex-token') || '{}';

        // use the browser's sessionStorage to store the token
        sessionStorage.setItem('token', token);

        // signal to the app that we're logged in
        this.appComponent.isLoggedIn = true;

        this.appComponent.updateUserInfo(response.body.username)
      },
      () => {
        this.isLoading = false;
        this.loginErrMsg = 'Login Failed'
      }
    );

    // clear the input fields
    this.username = '';
    this.password = '';
  }

  // .subscribe({
  //   next: (response) => {

  //     // set isloading to false
  //     this.isLoading = false;

  //     // build a token that we capture from the response headers (from Spring)
  //     console.log(response);
  //     const token = JSON.parse(response.headers.get('rolodex-token') || '{}')

  //     // use the browser's sessionStorage to store the token
  //     sessionStorage.setItem('token', token);

  //     // signal to the app that we're logged in
  //     this.appComponent.isLoggedIn = true;
  //   },
  //   error: () => {
  //     this.isLoading = false;
  //     this.loginErrMsg = 'Login Failed'
  //   }
  // })

  // // clear the input fields
  // this.username = '';
  // this.password = '';
}
