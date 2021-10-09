import { ColorValue, ViewStyle } from "react-native";

export interface ScreenProps {
  /**
   * should render a header
   */
  showHeader?: boolean;
  /**
   * Container style overrides
   */
  style?: ViewStyle;
  /**
   * Screen title for Header
   */
  title?: string;
  /**
   * Status bar color.
   */
  statusBarColor?: ColorValue | string;
}
