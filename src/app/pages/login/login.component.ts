import { Component } from '@angular/core';
import {User} from "../../utils/types/User";
import {AuthenticationService} from "../../utils/services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = {
    email: '',
    password: ''
  }
  stay_logged = false;

  constructor(private authService: AuthenticationService, private router: Router ) { }

  login() {
    this.authService.login(this.user, this.stay_logged).subscribe(
      () => this.router.navigate(['/secret'])
    );
  }

  register() {
    this.authService.register(this.user).subscribe();
  }

}
