import { ThemeInterface } from "../types/theme";
import { palette } from "./palette";

export const lightTheme: ThemeInterface = {
  palette,
  transparent: "rgba(0, 0, 0, 0)",
  background: {
    100: palette.white,
    200: palette.white,
    300: palette.white,
  },
  text: {
    100: palette.blueGrey[300],
    200: palette.blueGrey[400],
    300: palette.blueGrey[500],
  },
  primary: palette.primary,
  error: palette.red[900],
  category: {
    work: palette.primary[100],
    personal: palette.primary[400],
    all: palette.blueGrey[500],
  },
};

export const darkTheme: ThemeInterface = {
  palette,
  transparent: "rgba(0, 0, 0, 0)",
  background: {
    100: palette.blue[700],
    200: palette.blue[800],
    300: palette.blue[900],
  },
  text: {
    100: palette.blueGrey[100],
    200: palette.blueGrey[200],
    300: palette.blueGrey[300],
  },
  primary: palette.primary,
  error: palette.red[900],
  category: {
    work: palette.primary[100],
    personal: palette.primary[400],
    all: palette.blueGrey[100],
  },
};
