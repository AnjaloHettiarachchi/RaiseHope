import { Post } from "../../types";

export interface Action {
  type: "SET_POSTS" | "CLEAR_POSTS";
  payload?: Array<Post>;
}
