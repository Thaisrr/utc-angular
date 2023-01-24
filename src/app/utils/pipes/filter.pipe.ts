import { Pipe, PipeTransform } from '@angular/core';
import {Article} from "../types/Article";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Article[], arg: 'all' | 'dispo' = 'dispo'): Article[] {
    console.log('In filter pipe');
    if(arg === 'all') {
      return value;
    }
    return value.filter(a => a.quantity > 0);
  }
}
