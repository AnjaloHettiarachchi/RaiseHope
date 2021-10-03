import * as React from "react";
import { ButtonProps } from "./button.props";
import styled from "@emotion/native";
import { spacing, typography } from "../../config";
import { useTheme } from "@emotion/react";

function getColorByType(
  colorFor: "background" | "text",
  type:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "danger"
    | "warning"
    | "info",
) {
  const theme = useTheme();
  return theme.button[colorFor][type];
}

interface ContainerProps {
  disabled: boolean;
}

const Container = styled.View<ContainerProps>(props => ({
  opacity: props.disabled ? 0.3 : 1,
}));

interface TouchableOpacityProps {
  mode: "default" | "faded" | "ghost";
  type:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "danger"
    | "warning"
    | "info";
}

const ButtonWrapper = styled.TouchableOpacity<TouchableOpacityProps>(props => ({
  backgroundColor: getColorByType("background", props.type),
  borderColor: props.theme.palette.white,
  padding: spacing[3],
  borderRadius: 5,
}));

interface TextProps {
  type:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "danger"
    | "warning"
    | "info";
  fontSize: number;
}

const InnerText = styled.Text<TextProps>(props => ({
  color: getColorByType("text", props.type),
  fontFamily: typography.primary.medium,
  textAlign: "center",
  fontSize: props.fontSize,
}));

const Button: React.FC<ButtonProps> = ({
  disabled,
  mode = "default",
  type = "primary",
  fontSize = 16,
  children,
  ...buttonProps
}) => {
  return (
    <Container disabled={disabled}>
      <ButtonWrapper
        mode={mode}
        type={type}
        disabled={disabled}
        {...buttonProps}>
        <InnerText type={type} fontSize={fontSize}>
          {children}
        </InnerText>
      </ButtonWrapper>
    </Container>
  );
};

export default Button;
