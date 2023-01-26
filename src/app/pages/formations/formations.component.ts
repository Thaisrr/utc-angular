import {Component, OnInit} from '@angular/core';
import {FormationsService} from "../../utils/services/formations.service";
import {Formation} from "../../utils/types/Formation";

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit{
  all_formations?: Formation[];

  constructor(private formationService: FormationsService) {
    console.log('Formation Component - Constructor');
  }

  ngOnInit() {
    // Faire le traitement au démarrage du composant
    console.log('Formation Component - OnInit')
    this.all_formations = this.formationService.getAll();
  }


}
