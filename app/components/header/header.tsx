import * as React from "react";
import { HeaderProps } from "./header.props";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import { spacing } from "../../theme";
import { AntDesign } from "@expo/vector-icons";

const CONTAINER: ViewStyle = {
  paddingHorizontal: spacing[5],
};

const Header: React.FC<HeaderProps> = props => {
  const { style, handleBackButtonClick } = props;

  return (
    <View style={[CONTAINER, style]}>
      <TouchableOpacity onPress={() => handleBackButtonClick()}>
        <AntDesign size={spacing[6]} color="white" name="arrowleft" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
