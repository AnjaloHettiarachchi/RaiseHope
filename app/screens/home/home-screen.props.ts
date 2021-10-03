import { Post } from "../../types";

export interface HomeScreenProps {
  /**
   * List of Posts to display as a feed.
   */
  posts: Array<Post>;
  /**
   * A callback to sign out from the app
   */
  fetchPosts: () => void;
  /**
   * react-navigation navigation prop
   */
  navigation: any;
}
