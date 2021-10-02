import { Profile } from "../../types";
import { Action } from "../../actions/profile/types";

export const profileReducerDefaultState: Readonly<Profile> = {
  firstName: undefined,
  lastName: undefined,
  city: undefined,
  country: undefined,
  passion: undefined,
};

export const profileReducer = (
  state = profileReducerDefaultState,
  action: Action,
) => {
  switch (action.type) {
    case "SET_PROFILE":
      return { ...action.payload };

    case "CLEAR_PROFILE":
      return { ...profileReducerDefaultState };

    default:
      return state;
  }
};
