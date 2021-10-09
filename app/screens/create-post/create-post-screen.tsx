import React, { useState } from "react";
import { CreatePostScreenProps } from "./create-post-screen.props";
import styled from "@emotion/native";
import Screen from "../../components/screen/screen";
import { spacing, typography } from "../../config";
import Input from "../../components/input/input";
import LoadingButton from "../../components/loading-button/loading-button";
import ImagePreview from "../../components/image-preview/image-preview";
import Heading from "../../components/heading/heading";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useTheme } from "@emotion/react";
import { StyleSheet, View } from "react-native";
import { useCreatePostFields } from "../../hooks";
import { create } from "../../services/post-api";
import { connect } from "react-redux";

const Label = styled(Heading)(() => ({
  paddingVertical: spacing[3],
}));

const StyledScreen = styled(Screen)(props => ({
  backgroundColor: props.theme.palette.amber[700],
}));

const Container = styled.ScrollView(() => ({
  flex: 1,
  padding: spacing[3],
}));

const TopHeading = styled.Text(props => ({
  fontFamily: typography.primary.bold,
  fontSize: spacing[6],
  color: props.theme.palette.white,
  marginBottom: spacing[3],
}));

const StyledInput = styled(Input)({
  marginVertical: spacing[4],
});

const TextAreaInput = styled(Input)({
  minHeight: 150,
});

const CreatePostButton = styled(LoadingButton)({
  paddingVertical: spacing[3],
  marginVertical: spacing[3],
});

const CreatePostScreen: React.FC<CreatePostScreenProps> = ({
  navigation,
  user,
}) => {
  const theme = useTheme();
  const {
    title,
    description,
    goalAmount,
    goalDate,
    coverImage,
    clearAll,
    isValid,
  } = useCreatePostFields();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>(undefined);

  const styles = StyleSheet.create({
    dateTimePickerWrapper: {
      backgroundColor: theme.palette.white,
      borderRadius: spacing[1],
    },
  });

  async function createPostAsync() {
    if (isValid) {
      setIsLoading(true);

      try {
        await create({
          coverImage: coverImage.value,
          title: title.value,
          description: description.value,
          goalAmount: goalAmount.value,
          goalDate: goalDate.value.toISOString(),
          raisedAmount: 0,
          likes: 0,
          shares: 0,
          createdBy: user.uid,
          createdOn: new Date().toISOString(),
        });
        clearAll();
        navigation.navigate("Home");
      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <StyledScreen showHeader={false} statusBarColor={theme.palette.amber[700]}>
      <Container>
        <TopHeading>Make Your Own Hope</TopHeading>

        <StyledInput
          label="Title"
          placeholder="Give a suitable title for your Hope..."
          value={title.value}
          onChangeText={title.update}
        />
        <TextAreaInput
          multiline
          label="Description"
          placeholder="Describe your Hope..."
          value={description.value}
          onChangeText={description.update}
        />
        <StyledInput
          label="Goal Amount"
          placeholder="i.e., Rs. 50,000"
          keyboardType="number-pad"
          value={goalAmount.value && goalAmount.value.toString()}
          onChangeText={v => goalAmount.update(Number(v))}
        />

        <View>
          <Label scale={3}>Goal Date</Label>
          <View style={styles.dateTimePickerWrapper}>
            <DateTimePicker
              display="spinner"
              value={goalDate.value}
              onChange={(_, date) => goalDate.update(date)}
            />
          </View>
        </View>

        <View>
          <Label scale={3}>Cover Image</Label>
          <ImagePreview
            image={coverImage.value}
            onImageSelected={coverImage.update}
          />
        </View>

        <CreatePostButton
          onPress={createPostAsync}
          textColor={theme.palette.amber[900]}
          backgroundColor={theme.palette.white}
          type="secondary"
          isLoading={isLoading}
          error={error}>
          Post My Hope
        </CreatePostButton>
      </Container>
    </StyledScreen>
  );
};

const mapStateToProps = (state: any) => {
  if (!state.auth.user) return {};
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, undefined)(CreatePostScreen);
