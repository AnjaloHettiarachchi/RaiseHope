import { Palette } from "./palette";
import { ColorValue } from "react-native";

export interface ThemeInterface {
  palette: Palette;
  /**
   * Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due
   * to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: ColorValue;
  /**
   * The screen background color (with shades).
   */
  background: {
    100: ColorValue;
    200: ColorValue;
    300: ColorValue;
  };
  /**
   * The main tinting color.
   */
  primary: ColorValue;
  /**
   * The default color for various texts.
   */
  text: {
    100: ColorValue;
    200: ColorValue;
    300: ColorValue;
  };
  /**
   * Error messages and icons.
   */
  error: ColorValue;
}
