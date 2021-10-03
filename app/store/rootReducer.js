import { authReducer, postsReducer, profileReducer } from "../reducers";

import { combineReducers } from "redux";

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  posts: postsReducer,
});
