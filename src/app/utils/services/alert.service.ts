import { Injectable } from '@angular/core';
import {Alert, AlertDuration, AlertLevel} from "../types/Alert";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alert$ = new BehaviorSubject<Alert | null>(null);

  constructor() { }

  create(message: string, level: AlertLevel = 'info', duration: AlertDuration = 5000, closable= true) {
    const current_alert = {message, level, duration, closable};
    this.alert$.next(current_alert);
    if(!closable || duration !== 0) {
      setTimeout(this.close, duration)
    }
  }

  close() {
   // this.current_alert.message = '';
    if(this.alert$) this.alert$.next(null);
  }

}
