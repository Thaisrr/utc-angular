import {Component, OnInit} from '@angular/core';
import {AlertService} from "../../utils/services/alert.service";
import {Alert} from "../../utils/types/Alert";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit{
  alert$?: BehaviorSubject<Alert | null> ;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alert$ = this.alertService.alert$;
  }

  close() {
    this.alertService.close();
  }

}
