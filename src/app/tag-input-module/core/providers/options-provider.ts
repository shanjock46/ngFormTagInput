import {defaults, TagInputOptions} from '../../defaults';

export type Options = {
  tagInput?: {
    [P in keyof TagInputOptions]?: TagInputOptions[P];
  };
};

export class OptionsProvider {
  public static defaults = defaults;

  public setOptions(options: Options): void {
    OptionsProvider.defaults.tagInput = {...defaults.tagInput, ...options.tagInput};
  }
}

export {TagInputOptions};
