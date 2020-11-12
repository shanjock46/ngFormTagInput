import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {COMPOSITION_BUFFER_MODE, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Options, OptionsProvider} from './core/providers';
import {DeleteIconComponent, TagComponent, TagInputComponent, TagInputFormComponent, TagRippleComponent} from './components/index';

import {NgBindTransformPipe, NgModalTransformPipe} from './core/pipes/ngModalBindTransform';

const optionsProvider = new OptionsProvider();

@NgModule({
  declarations: [TagComponent, TagInputComponent, TagInputFormComponent, TagRippleComponent, NgBindTransformPipe, DeleteIconComponent, NgModalTransformPipe],
  exports: [
    TagComponent,
    TagInputComponent,
    TagInputFormComponent,
    TagRippleComponent,
    DeleteIconComponent,
    NgBindTransformPipe,
    NgModalTransformPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: COMPOSITION_BUFFER_MODE, useValue: false}
  ]
})
export class TagInputModule {
  /**
   * @name withDefaults
   * @param options {Options}
   */
  public static withDefaults(options: Options): void {
    optionsProvider.setOptions(options);
  }
}
