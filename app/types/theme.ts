import { Palette } from "./palette";

export interface ThemeInterface {
  palette: Palette;
  /**
   * Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due
   * to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: string;
  /**
   * The screen background.
   */
  background: {
    100: string;
    200: string;
    300: string;
  };
  /**
   * The main tinting color.
   */
  primary: string;
  /**
   * The default color of text in many components.
   */
  text: {
    100: string;
    200: string;
    300: string;
  };
  /**
   * Error messages and icons.
   */
  error: string;
  /**
   * Colors for categories
   */
  category: {
    work: string;
    personal: string;
    all: string;
  };
}
