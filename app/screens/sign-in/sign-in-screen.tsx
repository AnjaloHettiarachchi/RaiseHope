import React from "react";
import { TouchableOpacity } from "react-native";
import Input from "../../components/input/input";
import Screen from "../../components/screen/screen";
import LoadingButton from "../../components/loading-button/loading-button";
import { startSignIn, updateError } from "../../actions/auth/auth";
import { connect } from "react-redux";
import { spacing, typography } from "../../config";
import styled from "@emotion/native";
import { SignInScreenProps } from "./sign-in-screen.props";
import { useTheme } from "@emotion/react";

const Container = styled.View({
  paddingHorizontal: spacing[5],
});

const SignInInput = styled(Input)({
  marginVertical: spacing[2],
});

const SignInButton = styled(LoadingButton)({
  paddingVertical: spacing[3],
});

const SignUpMessage = styled.View({
  justifyContent: "center",
  flexDirection: "row",
  paddingVertical: spacing[6],
});

const SignUpText = styled.Text(props => ({
  fontSize: spacing[4],
  color: props.theme.palette.blue[100],
}));

const SignUpButton = styled.Text(props => ({
  marginLeft: spacing[1],
  color: props.theme.palette.white,
  fontFamily: typography.primary.medium,
  fontSize: spacing[4],
}));

function SignInScreen(props: SignInScreenProps) {
  const theme = useTheme();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <Screen title="Sign In">
      <Container>
        <SignInInput
          autoFocus
          value={email}
          onChangeText={setEmail}
          placeholder="Email Address"
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
        />
        <SignInInput
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          autoCompleteType="password"
          textContentType="password"
        />
        <SignInButton
          isLoading={props.isLoading}
          error={props.error}
          backgroundColor={theme.palette.white}
          onPress={() => props.signIn(email, password)}
          disabled={!email || !password}>
          Sign in
        </SignInButton>
        <SignUpMessage>
          <SignUpText>Don't have an account?</SignUpText>
          <TouchableOpacity
            onPress={() => {
              props.clearError();
              props.navigation.navigate("SignUpWithEmail");
            }}>
            <SignUpButton>Create Account</SignUpButton>
          </TouchableOpacity>
        </SignUpMessage>
      </Container>
    </Screen>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  signIn: async (email: string, password: string) => {
    await dispatch(startSignIn(email, password));
  },
  clearError: () => dispatch(updateError(null)),
});

const mapStateToProps = (state: any) => ({
  isLoading: state.auth.status === "loading",
  error: state.auth.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
