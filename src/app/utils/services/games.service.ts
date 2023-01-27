import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {catchError, Observable, of} from "rxjs";
import {Game, Games} from "../types/Game";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  url = environment.apiUrl + '/games';

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  getAll(): Observable<Games> {
    return this.http.get<Games>(this.url).pipe(
      catchError((error) => {
        this.errorService.handleError(error);
        return of([]);
      })
    );
  }

  getById(id: number): Observable<Game | null> {
    return this.http.get<Game>(this.url + '/' + id).pipe(
      catchError((error) => {
        this.errorService.handleError(error);
        return of(null);
      })
    );
  }

  create(game: Game): Observable<Game | null> {
    return this.http.post<Game>(this.url, game, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
      catchError((error) => {
        this.errorService.handleError(error);
        return of(null);
      })
    );
  }

  update(game: Game): Observable<Game | null> {
    return this.http.put<Game>(this.url, game, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
      catchError((error) => {
        this.errorService.handleError(error);
        return of(null);
      })
    );
  }

  remove(id: number): Observable<{}> {
    return this.http.delete(this.url + '/' + id).pipe(
      catchError((error) => {
        this.errorService.handleError(error);
        return of({});
      })
    );
  }

  getByAuthor(author: string) : Observable<Games> {
    return this.http.get<Games>(this.url, {
      params: {author} // &author="valeur_de_author"
    }).pipe(
      catchError((error) => {
        this.errorService.handleError(error);
        return of([]);
      })
    )
  }

}
