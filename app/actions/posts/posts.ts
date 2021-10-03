import { Post } from "../../types";
import { Action } from "./types";
import * as postApi from "../../services/post-api";

const setPosts = (posts: Array<Post>): Action => ({
  type: "SET_POSTS",
  payload: posts,
});

export const doFetchPosts = () => {
  return async (dispatch: any) => {
    const posts = await postApi.getAll();
    dispatch(setPosts(posts));
  };
};
