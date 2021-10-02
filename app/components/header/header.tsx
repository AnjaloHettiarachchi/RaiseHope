import * as React from "react";
import { HeaderProps } from "./header.props";
import { TextProps, TouchableOpacity, View, ViewStyle } from "react-native";
import { spacing, typography } from "../../config";
import { AntDesign } from "@expo/vector-icons";
import styled from "@emotion/native";

const Container: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: spacing[5],
  marginVertical: spacing[3],
};

const HeaderTitle = styled.Text<TextProps>(props => ({
  color: props.theme.palette.white,
  fontFamily: typography.primary.bold,
  fontSize: spacing[5],
  marginLeft: spacing[3],
}));

const Header: React.FC<HeaderProps> = props => {
  const { style, handleBackButtonClick, title } = props;

  return (
    <View style={[Container, style]}>
      <TouchableOpacity onPress={() => handleBackButtonClick()}>
        <AntDesign size={spacing[6]} color="white" name="arrowleft" />
      </TouchableOpacity>
      <HeaderTitle>{title}</HeaderTitle>
    </View>
  );
};

export default Header;
