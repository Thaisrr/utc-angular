import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../utils/services/authentication.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{

  isLogged$?: BehaviorSubject<boolean>;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.isLogged$ = this.authService.isLogged$;
  }

  logout() {
    this.authService.logout();
  }

}
