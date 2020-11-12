import {Observable} from 'rxjs';
import {AsyncValidatorFn, ValidatorFn} from '@angular/forms';

import {PLACEHOLDER, SECONDARY_PLACEHOLDER} from './core/constants';
import {TagModel} from './core/accessor';

export interface TagInputOptions {
  separatorKeys: string[];
  separatorKeyCodes: number[];
  maxItems: number;
  minDays: number;
  placeholder: string;
  secondaryPlaceholder: string;
  validators: ValidatorFn[];
  asyncValidators: AsyncValidatorFn[];
  onlyFromAutocomplete: boolean;
  errorMessages: { [key: string]: string; };
  theme: '';
  onTextChangeDebounce: number;
  inputId: string | null;
  inputClass: string;
  clearOnBlur: boolean;
  hideForm: boolean;
  addOnBlur: boolean;
  addOnPaste: boolean;
  pasteSplitPattern: string | RegExp;
  blinkIfDupe: boolean;
  removable: boolean;
  editable: boolean;
  allowDupes: boolean;
  modelAsStrings: boolean;
  trimTags: boolean;
  ripple: boolean;
  tabIndex: string;
  disable: boolean;
  dragZone: string;
  onRemoving?: (tag: TagModel) => Observable<TagModel>;
  onAdding?: (tag: TagModel) => Observable<TagModel>;
  displayBy: string;
  identifyBy: string;
  animationDuration: {
    enter: string,
    leave: string
  };
}

export const defaults = {
  tagInput: <TagInputOptions> {
    separatorKeys: [],
    separatorKeyCodes: [],
    maxItems: Infinity,
    minDays: 1,
    placeholder: PLACEHOLDER,
    secondaryPlaceholder: SECONDARY_PLACEHOLDER,
    validators: [],
    asyncValidators: [],
    onlyFromAutocomplete: false,
    errorMessages: {},
    theme: '',
    onTextChangeDebounce: 250,
    inputId: null,
    inputClass: '',
    clearOnBlur: false,
    hideForm: false,
    addOnBlur: false,
    addOnPaste: false,
    pasteSplitPattern: ',',
    blinkIfDupe: true,
    removable: true,
    editable: false,
    allowDupes: false,
    modelAsStrings: false,
    trimTags: true,
    ripple: true,
    tabIndex: '',
    disable: false,
    dragZone: '',
    onRemoving: undefined,
    onAdding: undefined,
    displayBy: 'display',
    identifyBy: 'value',
    animationDuration: {
      enter: '250ms',
      leave: '150ms'
    }
  }
};

/*function matchingFn(this: TagInputDropdown, value: string, target: TagModel): boolean {
  const targetValue = target[this.displayBy].toString();

  return targetValue && targetValue
    .toLowerCase()
    .indexOf(value.toLowerCase()) >= 0;
}*/
