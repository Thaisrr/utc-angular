import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rainbow'
})
export class RainbowPipe implements PipeTransform {

  transform(value: string): string {
    return '🌈' + value + '🌈';
  }

}
