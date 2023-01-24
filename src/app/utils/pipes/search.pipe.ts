import { Pipe, PipeTransform } from '@angular/core';
import {Article} from "../types/Article";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Article[], arg: string): Article[] {
    arg = arg.trim().toUpperCase();
    return value.filter(a =>
      a.title.toUpperCase().includes(arg)
      || a.description.toUpperCase().includes(arg)
    );
  }

}
