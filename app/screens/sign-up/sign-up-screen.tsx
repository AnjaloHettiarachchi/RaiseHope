import React from "react";
import { useCredentialsFields } from "../../hooks";
import Input from "../../components/input/input";
import Screen from "../../components/screen/screen";
import LoadingButton from "../../components/loading-button/loading-button";
import { startSignUp } from "../../actions/auth/auth";
import { connect } from "react-redux";
import { spacing } from "../../config";
import styled from "@emotion/native";
import { SignUpWithEmailProps } from "./sign-up-screen.props";

const Container = styled.View({
  paddingHorizontal: spacing[5],
});

const SignUpInput = styled(Input)({
  marginVertical: spacing[2],
});

const SignUpButton = styled(LoadingButton)({
  paddingVertical: spacing[3],
});

function SignUpScreen(props: SignUpWithEmailProps) {
  const {email, password} = useCredentialsFields();

  return (
    <Screen title="Create Account">
      <Container>
        <SignUpInput
          value={email.value}
          onChangeText={email.update}
          label="Email Address"
          placeholder="john.doe@example.com"
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          returnKeyType="next"
          error={
            !!email.value && !email.isValid
          }
          errorMessage="Invalid Email Address"
        />
        <SignUpInput
          value={password.value}
          onChangeText={password.update}
          label="Password"
          placeholder="secret"
          autoCompleteType="password"
          textContentType="password"
          secureTextEntry
          error={
            !!password.value &&
            !password.isValid
          }
          errorMessage="Invalid Password"
        />
        <SignUpButton
          isLoading={props.isLoading}
          error={props.error}
          onPress={() =>
            props.signUp(
              email.value,
              password.value,
            )
          }
          disabled={
            !email.value ||
            !password.value ||
            !password.isValid ||
            !email.isValid
          }>
          Sign up
        </SignUpButton>
      </Container>
    </Screen>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  signUp: (email: string, password: string) =>
    dispatch(startSignUp(email, password)),
});

const mapStateToProps = (state: any) => ({
  isLoading: state.auth.status === "loading",
  error: state.auth.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpScreen);
