import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../types/User";
import {environment} from "../../../environments/environment";
import {BehaviorSubject, catchError, map, Observable, of, take, tap} from "rxjs";
import {ErrorService} from "./error.service";
import {AlertService} from "./alert.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = environment.apiUrl;
  key = 'token';
  isLogged$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private alertService: AlertService, private errorService: ErrorService) {
    this.isLogged$.next(this.isLoggedIn());
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.key) || !!sessionStorage.getItem(this.key);
  }

  register(user: User): Observable<User | null> {
    return this.http.post<User>(`${this.url}/register`, user).pipe(
      tap(() => this.alertService.create('Vous êtes bien inscrit⋅e', 'success')),
      catchError(err => {
        this.errorService.handleError(err);
        return of(null);
      })
    );
  }

  login(user: User, stay_logged: boolean): Observable<User | null> {
    return this.http.post<{accessToken: string, user: User}>(`${this.url}/login`, user).pipe(
      tap(console.log),
      tap(res => this.storeToken(res.accessToken, stay_logged)),
      tap(() => this.alertService.create('Vous êtes bien connecté⋅e', 'success')),
      tap(() => this.isLogged$.next(true)),
      catchError(err => {
        this.errorService.handleError(err);
        return of(null);
      })
    );
  }

  storeToken(token: string, stay_logged: boolean) {
      if(stay_logged) {
        localStorage.setItem(this.key, token);
      } else {
        sessionStorage.setItem(this.key, token);
      }
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.isLogged$.next(false);
  }
}
