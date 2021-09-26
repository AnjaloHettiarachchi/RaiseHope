import React from "react";
import { connect } from "react-redux";
import Screen from "../../components/screen/screen";
import Button from "../../components/button/button";
import {
  startSignInAnonymously,
  startSignInWithFacebook,
  startSignInWithGoogle,
  updateError,
} from "../../actions/auth/auth";
import { spacing, typography } from "../../theme";
import styled from "@emotion/native";
import { WelcomeProps } from "./welcome";
import { TextProps } from "react-native";

const StyledScreen = styled(Screen)(props => ({
  backgroundColor: props.theme.palette.primary,
}));

const Container = styled.View({
  flex: 1,
  paddingHorizontal: 30,
});

const TitleArea = styled.View({
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
});

const WelcomeTitle = styled.Text<TextProps>(props => ({
  alignSelf: "center",
  fontFamily: typography.primary.bold,
  color: props.theme.palette.secondary,
  fontSize: 50,
}));

const LoginButton = styled(Button)({
  marginVertical: spacing[3],
});

const ButtonContainer = styled.View({
  marginBottom: 20,
});

const handleGetStartedBtnOnPress = (navigation: any) => {
  navigation.navigate("SignUpWithEmail");
};

const handleSignInBtnOnPress = (navigation: any) => {
  navigation.navigate("SignInWithEmail");
};

function WelcomeScreen(props: WelcomeProps) {
  return (
    // <Screen>
    //   <Container>
    //     <WelcomeTitle>{translate("welcomeScreen.title")}</WelcomeTitle>
    //     <LoginButton
    //       onPress={() => {
    //         props.clearError();
    //         props.navigation.push("SignInWithEmail");
    //       }}
    //       kind="primary"
    //     >
    //       {translate("welcomeScreen.signInMethods.email")}
    //     </LoginButton>
    //     <LoginButton onPress={props.signInAnonymously} kind="secondary">
    //       {translate("welcomeScreen.signInMethods.anonymous")}
    //     </LoginButton>
    //     <LoginButton onPress={props.signInWithGoogle} kind="secondary">
    //       {translate("welcomeScreen.signInMethods.gmail")}
    //     </LoginButton>
    //     <LoginButton onPress={props.signInWithFacebook} kind="secondary">
    //       {translate("welcomeScreen.signInMethods.facebook")}
    //     </LoginButton>
    //     {props.error && (
    //       <Error>
    //         <ErrorMessage>{props.error}</ErrorMessage>
    //       </Error>
    //     )}
    //   </Container>
    // </Screen>
    <StyledScreen>
      <Container>
        <TitleArea>
          <WelcomeTitle>RaiseHope</WelcomeTitle>
        </TitleArea>
        <ButtonContainer>
          <LoginButton
            onPress={() => handleGetStartedBtnOnPress(props.navigation)}>
            Get Started
          </LoginButton>
          <Button
            type="ghost"
            onPress={() => handleSignInBtnOnPress(props.navigation)}>
            Sign in
          </Button>
        </ButtonContainer>
      </Container>
    </StyledScreen>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  signInWithFacebook: () => dispatch(startSignInWithFacebook()),
  signInWithGoogle: () => dispatch(startSignInWithGoogle()),
  signInAnonymously: () => dispatch(startSignInAnonymously()),
  clearError: () => dispatch(updateError(null)),
});

const mapStateToProps = (state: any) => ({
  error: state.auth.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
