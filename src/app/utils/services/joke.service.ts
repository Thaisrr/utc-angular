import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  getRandom(): Observable<string> {
    return this.http.get<{joke: string}>('https://v2.jokeapi.dev/joke/Programming?&type=single&safe-mode')
      .pipe(
        map(res => res.joke),
        catchError(err => {
          // traiter l'erreur
          console.log(err);
          return of('');
        })
      )
  }

}
