import { Post } from "../../types";
import { Action } from "./types";
import * as postApi from "../../services/post-api";
import { getCachedAssets } from "../../utils/common";

const setPosts = (posts: Array<Post>): Action => ({
  type: "SET_POSTS",
  payload: posts,
});

export const doFetchPosts = () => {
  return async (dispatch: any) => {
    const posts = await postApi.getAll();
    const cachedImageUris = await getCachedAssets(posts.map(p => p.coverImage));
    const postsWithCachedImages = posts.map((p, i) => ({
      ...p,
      coverImage: cachedImageUris[i],
    }));
    dispatch(setPosts(postsWithCachedImages));
  };
};
