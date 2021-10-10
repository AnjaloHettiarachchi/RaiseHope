import { Profile } from "../../types";
import { Action } from "./types";
import * as profileApi from "../../services/profile-api";
import { profileReducerDefaultState } from "../../reducers";

const setProfile = (profile: Profile): Action => ({
  type: "SET_PROFILE",
  payload: { ...profile },
});

export const doAddProfile = (profile: Profile) => {
  return async (dispatch: any, getState: any) => {
    const { uid } = getState().auth.user;
    await profileApi.create(uid, profile);
    dispatch(setProfile({ ...profile }));
  };
};

const clearProfile = (): Action => ({
  type: "CLEAR_PROFILE",
  payload: { ...profileReducerDefaultState },
});

export const doClearProfile = () => {
  return (dispatch: any) => {
    dispatch(clearProfile());
  };
};

export const doLoadProfile = (uid: string) => {
  return async (dispatch: any) => {
    const profile = await profileApi.get(uid);
    dispatch(setProfile({ ...profile }));
  };
};
