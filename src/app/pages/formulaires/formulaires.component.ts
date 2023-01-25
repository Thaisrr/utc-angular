import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaires',
  templateUrl: './formulaires.component.html',
  styleUrls: ['./formulaires.component.css']
})
export class FormulairesComponent {

  username: string = '';
  user_login = {
    email: '',
    password: ''
  }

  login() {
    console.log('Login !', this.user_login);
  }

}
