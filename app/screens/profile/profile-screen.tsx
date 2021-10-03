import React from "react";
import Screen from "../../components/screen/screen";
import styled from "@emotion/native";
import Heading from "../../components/heading/heading";
import { spacing } from "../../config";
import Button from "../../components/button/button";
import { startSignOut } from "../../actions/auth/auth";
import { doClearProfile } from "../../actions/profile/profile";
import { connect } from "react-redux";
import { ProfileScreenProps } from "./profile-screen.props";

const Container = styled.View(() => ({
  flex: 1,
  justifyContent: "space-between",
}));

const WelcomeTitle = styled(Heading)(() => ({
  paddingHorizontal: spacing[5],
  marginTop: spacing[5],
}));

const LogoutButton = styled(Button)(() => ({
  marginHorizontal: spacing[5],
  marginVertical: spacing[3],
}));

const ProfileScreen = (props: ProfileScreenProps) => {
  return (
    <Screen showHeader={false}>
      <Container>
        <WelcomeTitle>{`Hello, ${props.userFirstName}`}</WelcomeTitle>
        <LogoutButton
          type="danger"
          mode="faded"
          onPress={() => props.signOut()}>
          Sign out
        </LogoutButton>
      </Container>
    </Screen>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
