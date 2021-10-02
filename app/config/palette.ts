import { Palette } from "../types/palette";
import colors from "./colors";

export const palette: Palette = {
  primary: colors.blue[900],
  secondary: colors.white,
  accent: colors.blue[900],
  ...colors,
};
