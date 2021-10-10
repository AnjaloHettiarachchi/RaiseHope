import React, { useEffect, useState } from "react";
import Heading from "../../components/heading/heading";
import Screen from "../../components/screen/screen";
import { connect } from "react-redux";
import { spacing } from "../../config";
import styled from "@emotion/native";
import { HomeScreenProps } from "./home-screen.props";
import { useTheme } from "@emotion/react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { doFetchPosts } from "../../actions/posts/posts";
import PostView from "../../components/post-view/post-view";
import { useNetInfo } from "@react-native-community/netinfo";

const Container = styled.View({
  flex: 1,
});

const HomeHeader = styled.View({
  marginBottom: spacing[3],
  paddingHorizontal: spacing[3],
});

const HeaderContent = styled.View({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: spacing[1],
});

const LostConnectionBanner = styled.View(props => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: props.theme.palette.amber[500],
}));

const LostConnectionBannerText = styled.Text(props => ({
  color: props.theme.palette.blueGrey[900],
}));

const styles = StyleSheet.create({
  flatList: {
    paddingHorizontal: spacing[3],
  },
});

function HomeScreen(props: HomeScreenProps) {
  const theme = useTheme();
  const { isConnected } = useNetInfo();
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  async function refreshPosts() {
    setIsRefreshing(true);
    try {
      isConnected && (await props.fetchPosts());
    } finally {
      setIsRefreshing(false);
    }
  }

  useEffect(() => {
    (async () => {
      if (props.posts.length === 0) await props.fetchPosts();
    })();
  }, []);

  return (
    <Screen>
      <Container>
        <HomeHeader>
          <HeaderContent>
            <Heading>RaiseHope</Heading>
            <TouchableOpacity>
              <MaterialIcon
                name="chat"
                color={theme.palette.white}
                size={spacing[6]}
              />
            </TouchableOpacity>
          </HeaderContent>
          {!isConnected && (
            <LostConnectionBanner>
              <LostConnectionBannerText>
                No Internet Connection.
              </LostConnectionBannerText>
            </LostConnectionBanner>
          )}
        </HomeHeader>

        <FlatList
          data={props.posts}
          style={styles.flatList}
          refreshing={isRefreshing}
          showsVerticalScrollIndicator={false}
          onRefresh={async () => await refreshPosts()}
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
