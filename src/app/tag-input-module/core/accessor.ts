import {ControlValueAccessor} from '@angular/forms';
import {Directive, Input} from '@angular/core';
import {OptionsProvider} from './providers';

export class TagModelClass {
  [key: string]: any;
}

export type TagModel = string | TagModelClass;

export function isObject(obj: any): boolean {
  return obj === Object(obj);
}

@Directive()
export class TagInputAccessorDirective implements ControlValueAccessor {
  /**
   * @name displayBy
   */
  @Input() public displayBy: string = OptionsProvider.defaults.tagInput.displayBy;
  /**
   * @name identifyBy
   */
  @Input() public identifyBy: string = OptionsProvider.defaults.tagInput.identifyBy;
  private _onTouchedCallback: () => void;
  private _onChangeCallback: (items: TagModel[]) => void;

  private _items: TagModel[] = [];

  public get items(): TagModel[] {
    return this._items;
  }

  public set items(items: TagModel[]) {
    this._items = items;
    this._onChangeCallback(this._items);
  }

  public onTouched() {
    this._onTouchedCallback();
  }

  public writeValue(items: any[]) {
    this._items = items || [];
  }

  public registerOnChange(fn: any) {
    this._onChangeCallback = fn;
  }

  public registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }

  /**
   * @name getItemValue
   * @param item
   * @param fromDropdown
   */
  public getItemValue(item: TagModel, fromDropdown = false): string {
    const property = this.identifyBy;
    return isObject(item) ? item[property] : item;
  }

  /**
   * @name getItemDisplay
   * @param item
   * @param fromDropdown
   */
  public getItemDisplay(item: TagModel, fromDropdown = false): string {
    const property = this.displayBy;
    return isObject(item) ? item[property] : item;
  }

  /**
   * @name getItemsWithout
   * @param index
   */
  protected getItemsWithout(index: number): TagModel[] {
    return this.items.filter((item, position) => position !== index);
  }
}
