import {Component, OnInit} from '@angular/core';
import {AlertService} from "../../utils/services/alert.service";
import {Alert} from "../../utils/types/Alert";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit{
  alert?: Alert;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    console.log('coucou')
    this.alert = this.alertService.current_alert;
  }

}
