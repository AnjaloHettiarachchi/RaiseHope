import * as React from "react";
import { InputProps } from "./input.props";
import styled from "@emotion/native";
import { spacing, typography } from "../../config";
import Heading from "../heading/heading";
import ErrorMessage from "../error-message/error-message";
import { useTheme } from "@emotion/react";

const Container = styled.View(() => ({}));

const Label = styled(Heading)(() => ({
  paddingVertical: spacing[3],
}));

interface TextInputProps {
  error: boolean;
}

const TextInput = styled.TextInput<TextInputProps>(props => ({
  flexDirection: "row",
  padding: spacing[4],
  backgroundColor: props.theme.palette.white,
  borderColor: props.error ? props.theme.error : props.theme.palette.white,
  borderWidth: 2,
  fontSize: spacing[4],
  color: props.theme.palette.blueGrey[700],
  fontFamily: typography.primary.regular,
  borderRadius: 5,
}));

const Input: React.FC<InputProps> = props => {
  const theme = useTheme();
  const { style, label, error, errorMessage, ...textInputProps } = props;

  return (
    <Container>
      {label && <Label scale={3}>{label}</Label>}
      <TextInput
        style={style}
        error={error}
        {...textInputProps}
        placeholderTextColor={theme.palette.blueGrey[300]}
      />
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default Input;
