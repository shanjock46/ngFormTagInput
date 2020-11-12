import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ngModalTransform'
})
export class NgModalTransformPipe implements PipeTransform {

  transform(value: string, key: string = null): string {
    // console.log("inside NgBindTransformPipe");
    // console.log(value);
    if (key === 'value') {
      if (value.indexOf(' week') !== -1 || value.indexOf(' weeks') !== -1) {
        let valArr = value.split(' ');
        value = valArr[0] + 'w';
      } else if (value.indexOf(' day') !== -1 || value.indexOf(' days') !== -1) {
        let valArr = value.split(' ');
        value = valArr[0] + 'd';
      } else if (value.indexOf(' month') !== -1 || value.indexOf(' months') !== -1) {
        let valArr = value.split(' ');
        value = valArr[0] + 'm';
      } else if (value.indexOf(' year') !== -1 || value.indexOf(' years') !== -1) {
        let valArr = value.split(' ');
        value = valArr[0] + 'y';
      } else {
        value = 'invalid';
      }
    }
    // console.log(value);
    return value;
  }

}
