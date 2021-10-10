import React from "react";
import Screen from "../../components/screen/screen";
import styled from "@emotion/native";
import Heading from "../../components/heading/heading";
import { spacing, typography } from "../../config";
import Button from "../../components/button/button";
import { startSignOut } from "../../actions/auth/auth";
import { doClearProfile } from "../../actions/profile/profile";
import { connect } from "react-redux";
import { ProfileScreenProps } from "./profile-screen.props";
import { useTheme } from "@emotion/react";
import { View } from "react-native";
import { MaterialCommunityIcons as MaterialIcon } from "@expo/vector-icons";

const Container = styled.View(() => ({
  flex: 1,
  justifyContent: "space-between",
  padding: spacing[3],
}));

const WelcomeTitle = styled(Heading)(() => ({
  marginVertical: spacing[5],
}));

const LogoutButton = styled(Button)(() => ({
  marginHorizontal: spacing[5],
}));

const ProfileOption: React.FC<{
  title: string;
  icon: string;
  isOpened?: boolean;
}> = props => {
  const theme = useTheme();

  const OptionWrapper = styled.View(p => ({
    backgroundColor: p.theme.palette.white,
    padding: spacing[3],
    borderRadius: spacing[1],
    marginVertical: spacing[2],
  }));

  const OptionHeader = styled.View({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  });

  const OptionLeftContent = styled.View({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  });

  const OptionTitle = styled.Text(p => ({
    color: p.theme.text[300],
    fontSize: spacing[4],
    marginLeft: spacing[2],
  }));

  return (
    <OptionWrapper>
      <OptionHeader>
        <OptionLeftContent>
          <MaterialIcon
            name={props.icon as any}
            size={spacing[6]}
            color={theme.primary}
          />
          <OptionTitle>{props.title}</OptionTitle>
        </OptionLeftContent>
        <MaterialIcon
          name={props.isOpened ? "chevron-up" : "chevron-down"}
          size={spacing[6]}
          color={theme.primary}
        />
      </OptionHeader>
      <View>{props.children}</View>
    </OptionWrapper>
  );
};

const ProfileOptionItemVertical = (props: {
  icon: string;
  text: string;
  subtext?: string;
}) => {
  const theme = useTheme();

  const OptionItemWrapper = styled.View(p => ({
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: p.theme.palette.blue[100],
    padding: spacing[3],
    borderRadius: spacing[1],
    marginVertical: spacing[2],
  }));

  const OptionItemText = styled.Text(p => ({
    fontFamily: typography.primary.medium,
    color: p.theme.text[300],
    fontSize: spacing[4],
    marginLeft: spacing[2],
  }));

  const OptionItemSubText = styled.Text(p => ({
    color: p.theme.text[100],
    fontSize: spacing[3],
    marginLeft: spacing[2],
  }));

  return (
    <OptionItemWrapper>
      <MaterialIcon
        name={props.icon as any}
        size={spacing[8]}
        color={theme.primary}
      />
      <View>
        <OptionItemText>{props.text}</OptionItemText>
        <OptionItemSubText>{props.subtext}</OptionItemSubText>
      </View>
    </OptionItemWrapper>
  );
};

const ProfileScreen = (props: ProfileScreenProps) => {
  return (
    <Screen showHeader={false}>
      <Container>
        <View>
          <WelcomeTitle>{`Hello, ${props.userFirstName}`}</WelcomeTitle>
          <ProfileOption title="Account Settings" icon="account-cog" />
          <ProfileOption title="Payment Details" icon="credit-card" />
          <ProfileOption title="Achievements" icon="trophy-variant" isOpened>
            <ProfileOptionItemVertical
              icon="trophy-variant-outline"
              text="Donate Rs. 100 for a Hope"
              subtext="10 Hope points"
            />
            <ProfileOptionItemVertical
              icon="trophy-variant-outline"
              text="Created Your First Hope"
              subtext="5 Hope points"
            />
          </ProfileOption>
        </View>
        <LogoutButton
          textColor={useTheme().palette.red[500]}
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
