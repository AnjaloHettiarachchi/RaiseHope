import { Colors } from "./colors";

export type Palette = {
  [color in keyof Colors]: Colors[color];
};
