import {Component, OnInit} from '@angular/core';
import {GamesService} from "../../utils/services/games.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Game} from "../../utils/types/Game";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit{
  game$? : Observable<Game | null>;

  constructor(
    private gamesService: GamesService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getGame();
  }

  getGame() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log('---- ID', id);
      if(id) {
        this.game$ = this.gamesService.getById(Number(id))
      }
    });
  }


}
