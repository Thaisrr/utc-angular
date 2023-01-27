import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  handleError(error: any) {
    // TODO : à améliorer
    console.error(error);
  }
}
