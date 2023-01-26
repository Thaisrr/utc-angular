import {Component, Input} from '@angular/core';
import {Formation} from "../../utils/types/Formation";
import {FormationsService} from "../../utils/services/formations.service";

@Component({
  selector: 'app-formation-card[formation]',
  templateUrl: './formation-card.component.html',
  styleUrls: ['./formation-card.component.css']
})
export class FormationCardComponent {
  @Input() formation!: Formation;

  constructor(private formationService: FormationsService) {}

  deleteFormation() {
    if(this.formation.id) {
      this.formationService.remove(this.formation.id)
    }
  }
}
