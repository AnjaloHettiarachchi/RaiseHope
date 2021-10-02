import React from "react";
import Heading from "../../components/heading/heading";
import Screen from "../../components/screen/screen";
import { startSignOut } from "../../actions/auth/auth";
import { connect } from "react-redux";
import { spacing } from "../../config";
import styled from "@emotion/native";
import Button from "../../components/button/button";
import { HomeScreenProps } from "./home-screen.props";
import { doClearProfile } from "../../actions/profile/profile";

const Container = styled.View(() => ({
  flex: 1,
}));

const WelcomeTitle = styled(Heading)(() => ({
  paddingHorizontal: spacing[5],
  marginTop: spacing[5],
}));

const LogoutButton = styled(Button)(() => ({
  marginHorizontal: spacing[5],
  marginVertical: spacing[3],
}));

function HomeScreen(props: HomeScreenProps) {
  return (
    <Screen>
      <Container>
        <LogoutButton type="default" onPress={() => props.signOut()}>
          Log Out
        </LogoutButton>
        <WelcomeTitle>{`Welcome, ${props.userFirstName}!`}</WelcomeTitle>
      </Container>
    </Screen>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  signOut: () => {
    dispatch(startSignOut());
    dispatch(doClearProfile());
  },
});

const mapStateToProps = (state: any) => {
  if (!state.profile) return {};

  return {
    userFirstName: state.profile.firstName,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
