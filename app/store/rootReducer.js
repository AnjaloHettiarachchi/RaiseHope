import { authReducer, profileReducer } from "../reducers";

import { combineReducers } from "redux";

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
});
