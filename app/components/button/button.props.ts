import { TouchableOpacityProps, ViewStyle } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * kinds of button, defaults to "primary"
   */
  type?: "default" | "ghost" | "outline";
  /**
   * the button text font size, defaults to 16s
   */
  fontSize?: number;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}
