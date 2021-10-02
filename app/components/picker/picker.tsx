import React from "react";
import { PickerProps } from "./picker.props";
import styled from "@emotion/native";
import Heading from "../heading/heading";
import { spacing } from "../../config";
import { View } from "react-native";
import { Picker as RNPicker } from "@react-native-picker/picker";
import ErrorMessage from "../error-message/error-message";

const Label = styled(Heading)(() => ({
  paddingVertical: spacing[3],
}));

const PickerContainer = styled.View(props => ({
  backgroundColor: props.theme.palette.white,
  borderRadius: 5,
}));

const Picker: React.FC<PickerProps> = props => {
  const { style, label, error, errorMessage, ...rNPickerProps } = props;

  return (
    <View>
      {label && <Label scale={3}>{label}</Label>}
      <PickerContainer>
        <RNPicker style={style} {...rNPickerProps} />
      </PickerContainer>
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </View>
  );
};

export default Picker;
