import { Colors } from "./colors";
import { ColorValue } from "react-native";

export type Palette = {
  [color in keyof Colors]: Colors[color];
} & {
  primary: ColorValue;
  secondary: ColorValue;
  accent: ColorValue;
};
