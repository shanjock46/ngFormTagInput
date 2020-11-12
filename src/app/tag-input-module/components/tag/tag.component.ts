import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {TagModel} from '../../core/accessor';
import {TagRippleComponent} from '../tag';
import {EventLike} from '../../core/helpers/events-like';

import {NgBindTransformPipe} from '../../core/pipes/ngModalBindTransform';

// mocking navigator
const navigator = typeof window !== 'undefined' ? window.navigator : {
  userAgent: 'Chrome',
  vendor: 'Google Inc'
};

const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

@Component({
  selector: 'app-tag',
  providers: [NgBindTransformPipe],
  templateUrl: './tag.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./tag.component.css']
})
export class TagComponent {

  /**
   * @name model {TagModel}
   */
  @Input()
  public model: TagModel;

  /**
   * @name removable {boolean}
   */
  @Input()
  public removable: boolean;

  /**
   * @name editable {boolean}
   */
  @Input()
  public editable: boolean;

  /**
   * @name template {TemplateRef<any>}
   */
  @Input()
  public template: TemplateRef<any>;

  /**
   * @name displayBy {string}
   */
  @Input()
  public displayBy: string;

  /**
   * @name identifyBy {string}
   */
  @Input()
  public identifyBy: string;

  /**
   * @name index {number}
   */
  @Input()
  public index: number;

  /**
   * @name hasRipple
   */
  @Input()
  public hasRipple: boolean;

  /**
   * @name disabled
   */
  @Input()
  public disabled = false;

  /**
   * @name canAddTag
   */
  @Input()
  public canAddTag: (tag: TagModel) => boolean;

  /**
   * @name onSelect
   */
  @Output()
  public onSelect: EventEmitter<TagModel> = new EventEmitter<TagModel>();

  /**
   * @name onRemove
   */
  @Output()
  public onRemove: EventEmitter<TagModel> = new EventEmitter<TagModel>();

  /**
   * @name onBlur
   */
  @Output()
  public onBlur: EventEmitter<TagModel> = new EventEmitter<TagModel>();

  /**
   * @name onKeyDown
   */
  @Output()
  public onKeyDown: EventEmitter<any> = new EventEmitter<any>();

  /**
   * @name onTagEdited
   */
  @Output()
  public onTagEdited: EventEmitter<TagModel> = new EventEmitter<TagModel>();
  /**
   * @name editing
   */
  public editing = false;
  /**
   * @name moving
   */
  @HostBinding('class.moving')
  public moving: boolean;
  /**
   * @name rippleState
   */
  public rippleState = 'none';
  /**
   * @name ripple {TagRipple}
   */
  @ViewChild(TagRippleComponent)
  public ripple: TagRippleComponent;

  constructor(
    public element: ElementRef,
    public renderer: Renderer2,
    private NgBindTransformFilter: NgBindTransformPipe
  ) {
  }

  /**
   * @name readonly {boolean}
   */
  public get readonly(): boolean {
    return typeof this.model !== 'string' && this.model.readonly === true;
  }

  /**
   * @desc returns whether the ripple is visible or not
   * only works in Chrome
   * @name isRippleVisible
   */
  public get isRippleVisible(): boolean {
    return !this.readonly && !this.editing && isChrome && this.hasRipple;
  }

  /**
   * @name select
   */
  public select($event?: MouseEvent): void {
    if (this.readonly || this.disabled) {
      return;
    }

    if ($event) {
      $event.stopPropagation();
    }

    this.focus();

    this.onSelect.emit(this.model);
  }

  /**
   * @name remove
   */
  public remove($event: MouseEvent): void {
    $event.stopPropagation();
    this.onRemove.emit(this);
  }

  /**
   * @name focus
   */
  public focus(): void {
    this.element.nativeElement.focus();
  }

  /**
   * @name keydown
   * @param event
   */
  @HostListener('keydown', ['$event'])
  public keydown(event: EventLike): void {
    if (this.editing) {
      if (event.keyCode === 13) {
        // return this.disableEditMode(event);
      }
    } else {
      this.onKeyDown.emit({event, model: this.model});
    }
  }

  /**
   * @name getDisplayValue
   * @param item
   */
  public getDisplayValue(item: TagModel): string {
    // const ngModalBindTransformPipe = new ngModalBindTransform;
    if (typeof item === 'string') {
      item = this.NgBindTransformFilter.transform(item);
      console.log('NgBindTransformFilter');
      console.log(item);
    }
    return typeof item === 'string' ? item : item[this.displayBy];
  }

  /**
   * @name isDeleteIconVisible
   */
  public isDeleteIconVisible(): boolean {
    return (
      !this.readonly && !this.disabled && this.removable && !this.editing
    );
  }
}
