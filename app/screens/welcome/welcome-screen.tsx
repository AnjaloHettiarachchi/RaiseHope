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
import { spacing, typography } from "../../config";
import styled from "@emotion/native";
import { WelcomeScreenProps } from "./welcome-screen.props";
import { TextProps } from "react-native";
import { useTheme } from "@emotion/react";

const StyledScreen = styled(Screen)(props => ({
  backgroundColor: props.theme.primary,
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
  color: props.theme.secondary,
  fontSize: 50,
}));

const LoginButton = styled(Button)({
  marginVertical: spacing[3],
});

const ButtonContainer = styled.View({
  marginBottom: 60,
});

const handleGetStartedBtnOnPress = (navigation: any) => {
  navigation.navigate("SignUpWithEmail");
};

const handleSignInBtnOnPress = (navigation: any) => {
  navigation.navigate("SignInWithEmail");
};

function WelcomeScreen(props: WelcomeScreenProps) {
  const theme = useTheme();

  return (
    <StyledScreen statusBarColor={theme.primary}>
      <Container>
        <TitleArea>
          <WelcomeTitle>RaiseHope</WelcomeTitle>
        </TitleArea>
        <ButtonContainer>
          <LoginButton
            type="secondary"
            onPress={() => handleGetStartedBtnOnPress(props.navigation)}>
            Get Started
          </LoginButton>
          <Button
            mode="ghost"
            textColor={theme.palette.white}
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
