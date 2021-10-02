import { ViewStyle } from "react-native";
import { PickerProps as RNPickerProps } from "@react-native-picker/picker";

export interface PickerProps extends RNPickerProps {
  /**
   * Is picker value valid.
   */
  error?: boolean;
  /**
   * Set an error message to display.
   */
  errorMessage?: string;
  /**
   * Set a Label for the component.
   */
  label?: string;
  /**
   * Override default styling of the wrapper
   */
  style?: ViewStyle;
}
