import { ThemeInterface } from "../types/theme";
import { palette } from "./palette";

export const lightTheme: ThemeInterface = {
  palette,
  transparent: "rgba(0, 0, 0, 0)",
  background: {
    100: palette.blue[700],
    200: palette.blue[800],
    300: palette.blue[900],
  },
  text: {
    100: palette.blueGrey[500],
    200: palette.blueGrey[700],
    300: palette.blueGrey[900],
  },
  primary: palette.blue[900],
  secondary: palette.white,
  accent: palette.blueGrey[900],
  error: palette.red[600],
  button: {
    background: {
      primary: palette.blue[900],
      secondary: palette.white,
      accent: palette.blueGrey[900],
      success: palette.blue[900],
      danger: palette.white,
      warning: palette.blue[900],
      info: palette.blue[900],
    },
    text: {
      primary: palette.white,
      secondary: palette.blue[900],
      accent: palette.white,
      success: palette.white,
      danger: palette.red[600],
      warning: palette.white,
      info: palette.white,
    },
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
  primary: palette.blue[900],
  secondary: palette.white,
  accent: palette.blueGrey[900],
  error: palette.red[800],
  button: {
    background: {
      primary: palette.blue[900],
      secondary: palette.white,
      accent: palette.blueGrey[900],
      success: palette.blue[900],
      danger: palette.red[900],
      warning: palette.blue[900],
      info: palette.blue[900],
    },
    text: {
      primary: palette.blue[900],
      secondary: palette.white,
      accent: palette.blueGrey[900],
      success: palette.blue[900],
      danger: palette.red[900],
      warning: palette.blue[900],
      info: palette.blue[900],
    },
  },
};
