import React, { useEffect } from "react";
import Heading from "../../components/heading/heading";
import Screen from "../../components/screen/screen";
import { connect } from "react-redux";
import { spacing } from "../../config";
import styled from "@emotion/native";
import { HomeScreenProps } from "./home-screen.props";
import { useTheme } from "@emotion/react";
import { FlatList, TouchableOpacity } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { doFetchPosts } from "../../actions/posts/posts";
import PostView from "../../components/post-view/post-view";

const Container = styled.View(() => ({
  flex: 1,
  padding: spacing[3],
}));

const HomeHeader = styled.View(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: spacing[3],
}));

function HomeScreen(props: HomeScreenProps) {
  const theme = useTheme();

  useEffect(() => {
    props.fetchPosts();
  }, []);

  return (
    <Screen>
      <Container>
        <HomeHeader>
          <Heading>RaiseHope</Heading>
          <TouchableOpacity>
            <MaterialIcon
              name="chat"
              color={theme.palette.white}
              size={spacing[6]}
              style={{ transform: [{ rotateY: "180deg" }] }}
            />
          </TouchableOpacity>
        </HomeHeader>

        <FlatList
          data={props.posts}
          renderItem={post => <PostView {...post.item} />}
        />
      </Container>
    </Screen>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchPosts: () => dispatch(doFetchPosts()),
});

const mapStateToProps = (state: any) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
