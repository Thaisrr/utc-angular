import {Component, OnInit} from '@angular/core';
import {FormationsService} from "../../utils/services/formations.service";
import {Formation} from "../../utils/types/Formation";
import {AlertService} from "../../utils/services/alert.service";

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit{
  all_formations?: Formation[];

  constructor(
    private formationService: FormationsService,
    private alertService: AlertService
  ) {
    console.log('Formation Component - Constructor');
  }

  ngOnInit() {
    // Faire le traitement au démarrage du composant
    console.log('Formation Component - OnInit')
    this.all_formations = this.formationService.getAll();
    this.alertService.create('Hello World');
  }


}
