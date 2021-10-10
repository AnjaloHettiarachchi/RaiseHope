import { Post } from "../../types";
import { Action } from "../../actions/posts/types";

export const postsReducerDefaultState: Readonly<Array<Post>> = [];

export const postsReducer = (
  state = postsReducerDefaultState,
  action: Action,
): Array<Post> => {
  switch (action.type) {
    case "SET_POSTS":
      return [...action.payload];

    default:
      return state as Array<Post>;
  }
};
