import React, { useCallback, useState } from "react";
import { ViewPostScreenProps } from "./view-post-screen.props";
import Screen from "../../components/screen/screen";
import { ActivityIndicator, Pressable, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Post } from "../../types";
import { get } from "../../services/post-api";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@emotion/react";
import { MaterialCommunityIcons as MaterialIcon } from "@expo/vector-icons";

import styled from "@emotion/native";
import { spacing, typography } from "../../config";
import FundingProgressView from "../../components/funding-progress-view/funding-progress-view";
import Button from "../../components/button/button";

const HeaderSection = styled.View({
  flex: 2,
});

const HeaderImage = styled.ImageBackground({
  flex: 1,
  alignItems: "stretch",
  justifyContent: "space-between",
  height: "100%",
});

const HeaderContent = styled.View({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: spacing[3],
});

const StyledLinearGradient = styled(LinearGradient)({
  height: "100%",
});

const HeaderText = styled.Text(props => ({
  color: props.theme.palette.white,
  fontSize: spacing[5],
  marginLeft: spacing[2],
  fontFamily: typography.primary.bold,
}));

const ActivityIndicatorWrapper = styled.View({
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
});

const FundingProgressViewWrapper = styled.View(props => ({
  backgroundColor: props.theme.palette.blue[300],
  padding: spacing[3],
  borderRadius: 5,
  marginBottom: spacing[3],
}));

const BodySection = styled.View({
  flex: 3,
  padding: spacing[3],
});

const BodyHeading = styled.Text(props => ({
  color: props.theme.palette.white,
  fontFamily: typography.primary.bold,
  fontSize: spacing[5],
  marginBottom: spacing[2],
}));

const BodyText = styled.Text(props => ({
  color: props.theme.text[300],
}));

const ViewPostScreen: React.FC<ViewPostScreenProps> = ({
  route,
  navigation,
}) => {
  const { postId } = route.params;
  const theme = useTheme();
  const [post, setPost] = useState<Post>(undefined);
  const [isCoverImageLoaded, setIsCoverImageLoaded] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      get(postId).then(post => setPost(post));
    }, [postId]),
  );

  return (
    <Screen showHeader={false}>
      {!post ? (
        <ActivityIndicator color={theme.palette.white} />
      ) : (
        <>
          <HeaderSection>
            <HeaderImage
              onLoadEnd={() => setIsCoverImageLoaded(true)}
              source={{ uri: post.coverImage }}>
              <StyledLinearGradient
                colors={[
                  theme.palette.blue[700] as string,
                  "transparent",
                  theme.palette.blue[700] as string,
                ]}>
                {!isCoverImageLoaded ? (
                  <ActivityIndicatorWrapper>
                    <ActivityIndicator color={theme.palette.white} />
                  </ActivityIndicatorWrapper>
                ) : (
                  <HeaderContent>
                    <Pressable onPress={async () => await navigation.goBack()}>
                      <MaterialIcon
                        name="arrow-left"
                        size={spacing[6]}
                        color={theme.palette.white}
                      />
                    </Pressable>
                    <HeaderText>{post.title}</HeaderText>
                  </HeaderContent>
                )}
              </StyledLinearGradient>
            </HeaderImage>
          </HeaderSection>
          <BodySection>
            <FundingProgressViewWrapper>
              <FundingProgressView
                currentAmount={post.raisedAmount}
                goalAmount={post.goalAmount}
              />
              <Button
                type="secondary"
                backgroundColor={theme.palette.amber[500]}>
                Donate
              </Button>
              <Button
                type="secondary"
                backgroundColor={theme.palette.blue[300]}>
                Share
              </Button>
            </FundingProgressViewWrapper>
            <View>
              <BodyHeading>About</BodyHeading>
              <BodyText ellipsizeMode="tail" numberOfLines={10}>
                {post.description}
              </BodyText>
            </View>
          </BodySection>
        </>
      )}
    </Screen>
  );
};

export default ViewPostScreen;
