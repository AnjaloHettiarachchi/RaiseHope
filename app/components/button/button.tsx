import * as React from "react";
import { ButtonProps } from "./button.props";
import styled from "@emotion/native";
import { spacing, typography } from "../../config";

interface ContainerProps {
  disabled: boolean;
}

const Container = styled.View<ContainerProps>(props => ({
  opacity: props.disabled ? 0.3 : 1,
}));

interface TouchableOpacityProps {
  type: "default" | "ghost" | "outline";
}

const TouchableOpacity = styled.TouchableOpacity<TouchableOpacityProps>(
  props => ({
    backgroundColor:
      props.type === "ghost"
        ? props.theme.transparent
        : props.theme.palette.white,
    borderColor: props.theme.palette.white,
    borderWidth: props.type === "ghost" ? 0 : 3,
    padding: spacing[3],
    borderRadius: 5,
  }),
);

interface TextProps {
  type: "default" | "ghost" | "outline";
  fontSize: number;
}

const Text = styled.Text<TextProps>(props => ({
  color:
    props.type === "ghost" ? props.theme.palette.white : props.theme.background[100],
  fontFamily: typography.primary.medium,
  textAlign: "center",
  fontSize: props.fontSize,
}));

const Button: React.FC<ButtonProps> = props => {
  const { disabled, type = "default", fontSize = 16, ...buttonProps } = props;
  return (
    <Container disabled={disabled}>
      <TouchableOpacity type={type} {...buttonProps} disabled={disabled}>
        <Text fontSize={fontSize} type={type}>
          {props.children}
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Button;
