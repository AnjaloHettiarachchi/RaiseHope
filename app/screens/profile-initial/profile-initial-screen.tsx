import React from "react";
import Screen from "../../components/screen/screen";
import styled from "@emotion/native";
import { connect } from "react-redux";
import { spacing, typography } from "../../config";
import Input from "../../components/input/input";
import Picker from "../../components/picker/picker";
import { Picker as RNPicker, PickerProps } from "@react-native-picker/picker";
import { StyleProp, TextStyle } from "react-native";
import Button from "../../components/button/button";
import { doAddProfile } from "../../actions/profile/profile";
import { ProfileInitialScreenProps } from "./profile-initial-screen.props";
import { useProfileInitialFields } from "../../hooks";
import { Profile } from "../../types";
import { useTheme } from "@emotion/react";

const StyledScreen = styled(Screen)({
  padding: spacing[3],
});

const Container = styled.View(() => ({
  flex: 1,
}));

const Heading = styled.Text(props => ({
  fontFamily: typography.primary.bold,
  fontSize: spacing[6],
  color: props.theme.palette.white,
  marginBottom: spacing[3],
}));

const StyledInput = styled(Input)({
  marginVertical: spacing[2],
});

const Row = styled.View({
  display: "flex",
  flexDirection: "row",
});

const Col = styled.View({
  flex: 1,
});

const StyledPicker = styled(Picker)<PickerProps>({
  height: 60,
});

const pickerItemStyle: StyleProp<TextStyle> = {
  height: 60,
};

const StyledButton = styled(Button)({
  marginTop: spacing[6],
});

const ProfileInitialScreen: React.FC<ProfileInitialScreenProps> = props => {
  const {
    firstName,
    lastName,
    city,
    country,
    passion,
  } = useProfileInitialFields();

  function handleSaveProfileInitial() {
    props.addProfile({
      firstName: firstName.value,
      lastName: lastName.value,
      city: city.value,
      country: country.value,
      passion: passion.value,
    });
  }

  return (
    <StyledScreen>
      <Container>
        <Heading>Tell us more about yourself...</Heading>
        <StyledInput
          label="First Name"
          placeholder="John"
          value={firstName.value}
          onChangeText={firstName.update}
        />
        <StyledInput
          label="Last Name"
          placeholder="Doe"
          value={lastName.value}
          onChangeText={lastName.update}
        />
        <Row>
          <Col>
            <StyledInput
              style={{ marginRight: spacing[2] }}
              label="City"
              placeholder="Colombo"
              value={city.value}
              onChangeText={city.update}
            />
          </Col>
          <Col>
            <StyledInput
              style={{ marginLeft: spacing[2] }}
              label="Country"
              placeholder="Sri Lanka"
              value={country.value}
              onChangeText={country.update}
            />
          </Col>
        </Row>
        <StyledPicker
          itemStyle={pickerItemStyle}
          selectedValue={passion.value}
          label="I am more passionate about..."
          onValueChange={v => passion.update(v as string)}>
          <RNPicker.Item label="Arts" value="arts" />
          <RNPicker.Item label="Fundraisers" value="fundraises" />
          <RNPicker.Item label="Design & Tech" value="design_tech" />
          <RNPicker.Item label="Music" value="music" />
          <RNPicker.Item label="Other" value="other" />
        </StyledPicker>

        <StyledButton
          textColor={useTheme().palette.white}
          onPress={handleSaveProfileInitial}>
          Save
        </StyledButton>
      </Container>
    </StyledScreen>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  addProfile: (profile: Profile) => dispatch(doAddProfile(profile)),
});

export default connect(undefined, mapDispatchToProps)(ProfileInitialScreen);
