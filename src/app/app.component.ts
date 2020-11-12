import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {NgModalTransformPipe} from './tag-input-module/core/pipes/ngModalBindTransform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [NgModalTransformPipe],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngFormTagInput';
  items = [];
  items2 = [];
  minDays = 1;

  public validators = [this.invalidTag];
  public errorMessages = {
    startWith: 'should start with number',
    tempTag: 'Enter valid tag (ex: 7 days)',
    req: 'This field required',
    invalidTag: 'Invalid Tag. Please enter in "n days format"'
  };

  constructor(
    public NgModalTransformFilter: NgModalTransformPipe
  ) {
  }

  private invalidTag(control: FormControl) {
    if (typeof control.value === 'string' && control.value.length > 0) {
      const t = control.value;
      if (t.length === 1) {
        const n: number = +t;
        if (isNaN(n)) {
          return {
            startWith: true
          };
        }
      } else if (t.length === 2) {
        const n: number = +t;
        if (isNaN(n)) {
          return {
            tempTag: true
          };
        }
      } else {
        const tArr = t.split(' ');
        if ('days'.indexOf(tArr[1]) === -1
          && 'weeks'.indexOf(tArr[1]) === -1
          && 'years'.indexOf(tArr[1])) {
          return {
            tempTag: true
          };
        }
      }
      if (t === 'invalid') {
        return {
          invalidTag: true
        };
      }
    }

    return null;
  }
}
