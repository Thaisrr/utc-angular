import { Injectable } from '@angular/core';
import {Formation} from "../types/Formation";

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

  formations: Formation[];

  constructor() {
    const storage = localStorage.getItem('formations');
    this.formations = (storage)? JSON.parse(storage) : [];
  }

  add(new_formation: Formation) {
    new_formation.id = Date.now();
    this.formations.push(new_formation);
    localStorage.setItem('formations', JSON.stringify(this.formations))
  }

  getAll() {
    return this.formations;
  }

  remove(id: number) {
    const index = this.formations.findIndex(f => f.id === id);
    this.formations.splice(index, 1);
    localStorage.setItem('formations', JSON.stringify(this.formations))
  }
}
