import { Colors } from "./colors";

export type Palette = {
  [color in keyof Colors]: Colors[color];
} & {
  primary: string;
  secondary: string;
  accent: string;
};
