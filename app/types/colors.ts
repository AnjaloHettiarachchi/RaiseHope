export type PrimaryColor = string;

export type ColorWithShades = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export interface Colors {
  black: PrimaryColor;
  white: PrimaryColor;
  blue: ColorWithShades;
  blueGrey: ColorWithShades;
  red: ColorWithShades;
}
