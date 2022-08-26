import { ClientMessage } from './../../models/client-message';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title = 'Register User'
  clientMessage: ClientMessage = new ClientMessage('');

  // 2-way databinding with ngModel to set the properties of this object=
  user: User = new User(0, ``, ``, ``, ``, ``,``)

  constructor(private userService : UserService, private router: Router) { }

  registerUser(): void {


    this.userService.registerUser(this.user)
    .subscribe({
      next: (data) => {
        console.log(data);
        this.clientMessage.message = `successfully registered ${data.firstName}`
        this.router.navigate(['/main']);
      },
      error: (error) => this.clientMessage.message = `something went wrong ${error}`,
      complete: () => console.log('complete')
    });

  }


}
