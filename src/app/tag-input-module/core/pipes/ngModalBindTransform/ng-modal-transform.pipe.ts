import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ngModalTransform'
})
export class NgModalTransformPipe implements PipeTransform {

  transform(value: string, key: string = null): string {
    if (key === 'value') {
      if (value.indexOf(' week') !== -1 || value.indexOf(' weeks') !== -1) {
        const valArr = value.split(' ');
        value = valArr[0] + 'w';
      } else if (value.indexOf(' day') !== -1 || value.indexOf(' days') !== -1) {
        const valArr = value.split(' ');
        value = valArr[0] + 'd';
      } else if (value.indexOf(' month') !== -1 || value.indexOf(' months') !== -1) {
        const valArr = value.split(' ');
        value = valArr[0] + 'm';
      } else if (value.indexOf(' year') !== -1 || value.indexOf(' years') !== -1) {
        const valArr = value.split(' ');
        value = valArr[0] + 'y';
      } else {
        value = 'invalid';
      }
    }
    return value;
  }

}
