import { Profile } from "../../types";

export interface Action {
  type: "SET_PROFILE" | "CLEAR_PROFILE" | "UPDATE_PROFILE";
  payload?: Profile;
}
