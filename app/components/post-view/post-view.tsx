import React, { useState } from "react";
import { PostViewProps } from "./post-view.props";
import styled from "@emotion/native";
import {
  ActivityIndicator,
  Alert,
  ColorValue,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { spacing, typography } from "../../config";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@emotion/react";
import { ProgressBar } from "react-native-paper";
import { currencyFormat } from "../../utils/common";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const CardView = styled.View(props => ({
  display: "flex",
  // justifyContent: "space-between",
  backgroundColor: props.theme.palette.white,
  borderRadius: 10,
  minHeight: 400,
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
  borderTopColor: props.theme.palette.blueGrey[100]
}));

const FundingProgressView = (props: {
  currentAmount: number;
  goalAmount: number;
}) => {
  const theme = useTheme();

  const StyledProgressBar = styled(ProgressBar)({
    marginTop: spacing[1],
    marginBottom: spacing[3],
    borderRadius: 5,
  });

  const CurrencyText = styled.Text(props => ({
    color: props.theme.text[300],
    fontFamily: typography.primary.medium,
  }));

  const StyledText = styled.Text(props => ({
    color: props.theme.text[100],
  }));

  return (
    <View>
      <StyledText>
        <CurrencyText>{currencyFormat(props.currentAmount)}</CurrencyText>
        {" raised of "}
        <CurrencyText>{currencyFormat(props.goalAmount)}</CurrencyText> goal
      </StyledText>
      <StyledProgressBar
        color={theme.primary as string}
        progress={props.currentAmount / props.goalAmount}
      />
    </View>
  );
};

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
  id,
  title,
  coverImage,
  description,
  goalAmount,
  raisedAmount,
  likes,
  shares,
}) => {
  const theme = useTheme();
  const [isCoverImageLoading, setIsCoverImageLoading] = useState<boolean>(
    undefined,
  );

  return (
    <Pressable onPress={() => Alert.alert(`postId: ${id}`)}>
      <CardView>
        <CoverImage
          source={{
            uri:
              "https://firebasestorage.googleapis.com/v0/b/axicon-raisehope.appspot.com/o/post-cover-images%2FqOQwROOjcvxn70gvhMw6.jpg?alt=media&token=1c34b4ad-d0bf-4a15-a235-ffa701b9c06b",
          }}
          resizeMode={"cover"}
          onLoadStart={() => setIsCoverImageLoading(true)}
          onLoadEnd={() => setIsCoverImageLoading(false)}
          imageStyle={styles.coverImage}>
          {isCoverImageLoading ? (
            <ActivityIndicator color={theme.primary} />
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
            icon={"heart-outline"}
            color={theme.palette.red[500]}
            count={likes}
          />
          <IconWithCount icon={"chat"} count={52} />
          <IconWithCount icon={"share"} count={shares} />
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
