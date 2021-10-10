import React, { useState } from "react";
import { PostViewProps } from "./post-view.props";
import styled from "@emotion/native";
import {
  ActivityIndicator,
  ColorValue,
  Pressable,
  StyleSheet,
} from "react-native";
import { spacing, typography } from "../../config";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@emotion/react";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FundingProgressView from "../funding-progress-view/funding-progress-view";

const CardView = styled.View(props => ({
  display: "flex",
  backgroundColor: props.theme.palette.white,
  borderRadius: 10,
  minHeight: 400,
  marginVertical: spacing[1],
}));

const CoverImage = styled.ImageBackground({
  flex: 10,
  borderRadius: 10,
  justifyContent: "flex-end",
});

const CardTitle = styled.Text(props => ({
  color: props.theme.palette.white,
  fontFamily: typography.primary.bold,
  fontSize: spacing[5],
  padding: spacing[3],
}));

const CardBody = styled.View({
  flex: 1,
  padding: spacing[3],
});

const LongText = styled.Text({
  fontSize: spacing[4],
});

const CardFooter = styled.View(props => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: spacing[3],
  borderTopWidth: 1,
  borderTopColor: props.theme.palette.blueGrey[100],
}));

const IconWithCount = (props: {
  icon: string;
  count: number;
  color?: ColorValue | string;
}) => {
  const theme = useTheme();

  const Wrapper = styled.View({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  });

  const StyledText = styled.Text({
    marginHorizontal: spacing[1],
  });

  return (
    <Wrapper>
      <MaterialIcon
        name={props.icon}
        color={props.color || theme.text[300]}
        size={spacing[5]}
      />
      <StyledText>{props.count}</StyledText>
    </Wrapper>
  );
};

const PostView: React.FC<PostViewProps> = ({
  title,
  coverImage,
  description,
  goalAmount,
  raisedAmount,
  likes,
  shares,
  onPress,
}) => {
  const theme = useTheme();

  const [isCoverImageLoading, setIsCoverImageLoading] = useState<boolean>(
    undefined,
  );
  return (
    <Pressable onPress={onPress}>
      <CardView>
        <CoverImage
          source={{ uri: coverImage }}
          resizeMode="cover"
          onLoadStart={() => setIsCoverImageLoading(true)}
          onLoadEnd={() => setIsCoverImageLoading(false)}
          imageStyle={styles.coverImage}>
          {isCoverImageLoading ? (
            <ActivityIndicator color={theme.palette.white} />
          ) : (
            <LinearGradient colors={["transparent", "rgba(0, 0, 0, .5)"]}>
              <CardTitle>{title}</CardTitle>
            </LinearGradient>
          )}
        </CoverImage>
        <CardBody>
          <FundingProgressView
            currentAmount={raisedAmount}
            goalAmount={goalAmount}
          />
          <LongText ellipsizeMode="tail" numberOfLines={3}>
            {description}
          </LongText>
        </CardBody>
        <CardFooter>
          <IconWithCount
            icon="heart-outline"
            color={theme.palette.amber[700]}
            count={likes}
          />
          <IconWithCount icon="chat-outline" count={0} />
          <IconWithCount icon="share-outline" count={shares} />
        </CardFooter>
      </CardView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  coverImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default PostView;
