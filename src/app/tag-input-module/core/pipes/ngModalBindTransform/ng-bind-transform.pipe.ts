import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ngBindTransform'
})
export class NgBindTransformPipe implements PipeTransform {

  transform(value: string, key: string = null): string {
    if (typeof value === 'string') {
      const slicedNum = Number(value.slice(0, -1));
      if (slicedNum.toString() !== 'NaN') {
        if (value.indexOf('w') !== -1) {
          value = slicedNum + (slicedNum === 1 ? ' week' : ' weeks');
        } else if (value.indexOf('d') !== -1) {
          value = slicedNum + (slicedNum === 1 ? ' day' : ' days');
        } else if (value.indexOf('m') !== -1) {
          value = slicedNum + (slicedNum === 1 ? ' month' : ' months');
        } else if (value.indexOf('y') !== -1) {
          value = slicedNum + (slicedNum === 1 ? ' year' : ' years');
        }
      }
    }
    return value;
  }

}
