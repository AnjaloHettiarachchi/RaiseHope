import { ColorValue, TouchableOpacityProps, ViewStyle } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * Modes of button. (default: `default`)
   */
  mode?: "default" | "faded" | "ghost";
  /**
   * Types of button.
   */
  type?:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "danger"
    | "warning"
    | "info";
  /**
   * The button text font size. (default: `16px`)
   */
  fontSize?: number;
  /**
   * Container style overrides.
   */
  style?: ViewStyle;
  /**
   * Custom background color for the button.
   */
  backgroundColor?: ColorValue | string;
  /**
   * Custom text color for the button.
   */
  textColor?: ColorValue | string;
}
