import { Injectable } from '@angular/core';
import {AlertService} from "./alert.service";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private alertService: AlertService) { }

  handleError(error: any) {
    // TODO : à améliorer
    console.error(error);
    this.alertService.create( error?.error?.message || 'ça marche pas', 'error' );
  }
}
