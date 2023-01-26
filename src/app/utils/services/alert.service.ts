import { Injectable } from '@angular/core';
import {Alert, AlertDuration, AlertLevel} from "../types/Alert";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  current_alert?: Alert = {
    message: '',
    level: 'info',
    duration: 5000,
    closable: true
  }

  constructor() { }

  create(message: string, level: AlertLevel = 'info', duration: AlertDuration = 5000, closable= true) {
    this.current_alert = {message, level, duration, closable};
  }

  close() {
   // this.current_alert.message = '';
  }

}
