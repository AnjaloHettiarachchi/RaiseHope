import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { ThemeInterface } from "../../types/theme";

export interface ReactiveThemeProviderProps {
  /**
   * The entire application
   */
  children: ReactNode;
  /**
   * The light config interface
   */
  lightTheme: ThemeInterface;
  /**
   * The dark config interface
   */
  darkTheme: ThemeInterface;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
