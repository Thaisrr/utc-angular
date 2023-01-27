import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JokeService} from "../../../utils/services/joke.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit{
  joke?: string;
  async_joke$?: Observable<string>;
  constructor(private http: HttpClient, private jokeService: JokeService) {}

  ngOnInit() {
    this.http.get('https://swapi.dev/api/people/1')
      .subscribe({
        next: res => console.log(res),
        error: err => console.warn('ça a pas marché', err)
      })
    // Subscribe : pour faire qqch au next, si besoin d'agir
    this.jokeService.getRandom().subscribe(res => this.joke = res);

    // Solution 2 : si il faut juste récupérer la valeur pour l'afficher dans le template
    this.async_joke$ = this.jokeService.getRandom();


  }
}
