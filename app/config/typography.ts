import { Platform } from "react-native";

export const typography = {
  primary: {
    black: "Inter-Black",
    bold: "Inter-Bold",
    extraBold: "Inter-ExtraBold",
    extraLight: "Inter-ExtraLight",
    light: "Inter-Light",
    medium: "Inter-Medium",
    regular: "Inter-Regular",
    semiBold: "Inter-SemiBold",
    thin: "Inter-Thin",
    variable: "Inter-Variable",
  },
  secondary: Platform.select({ ios: "Arial", android: "sans-serif" }),
  code: Platform.select({ ios: "Courier", android: "monospace" }),
};
