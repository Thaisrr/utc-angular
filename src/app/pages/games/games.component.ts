import {Component, OnInit} from '@angular/core';
import {GamesService} from "../../utils/services/games.service";
import { Games} from "../../utils/types/Game";
import {Observable} from "rxjs";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games$?: Observable<Games>;

  constructor(private gameService: GamesService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.games$ = this.gameService.getAll();
  }


}
