import { ColorValue } from "react-native";

export type PrimaryColor = ColorValue;

export type ColorWithShades = {
  100: ColorValue;
  200: ColorValue;
  300: ColorValue;
  400: ColorValue;
  500: ColorValue;
  600: ColorValue;
  700: ColorValue;
  800: ColorValue;
  900: ColorValue;
};

export interface Colors {
  black: PrimaryColor;
  white: PrimaryColor;
  blue: ColorWithShades;
  blueGrey: ColorWithShades;
  red: ColorWithShades;
}
