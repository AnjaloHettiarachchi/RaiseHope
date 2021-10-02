import { to } from "../../utils/to";
import { Error, Status } from "../../types/auth";
import { authApi } from "../../services";

import { firebase } from "../../firebase/firebase";
import { doLoadProfile } from "../profile/profile";

export const updateStatus = (status: Status) => ({
  type: "UPDATE_STATUS",
  payload: {
    status,
  },
});

export const updateError = (error: Error) => ({
  type: "UPDATE_ERROR",
  payload: {
    error,
  },
});

export const signIn = (user: firebase.User) => ({
  type: "SIGN_IN",
  payload: {
    user,
  },
});

const handlerError = (dispatch: any, error: string) => {
  dispatch(updateStatus("failed"));
  dispatch(updateError(error));
};

export const startSignIn = (email: string, password: string) => {
  return async (dispatch: any) => {
    dispatch(updateStatus("loading"));

    const [error, userCredential] = await authApi.signInWithEmail(
      email,
      password,
    );

    if (error) return handlerError(dispatch, error.message);

    await dispatch(doLoadProfile(userCredential.user.uid));
    dispatch(updateStatus("succeeded"));
    dispatch(updateError(null));
    dispatch(signIn(userCredential.user));
    dispatch(updateStatus("idle"));
  };
};

export const startSignUp = (email: string, password: string) => {
  return async (dispatch: any) => {
    dispatch(updateStatus("loading"));

    const [error, userCredential] = await authApi.signUpWithEmail(
      email,
      password,
    );

    if (error) return handlerError(dispatch, error.message);

    dispatch(updateStatus("succeeded"));
    dispatch(updateError(null));
    dispatch(signIn(userCredential.user));
    dispatch(updateStatus("idle"));
  };
};

export const startSignInWithFacebook = () => {
  return async (dispatch: any) => {
    dispatch(updateStatus("loading"));

    const [fbError, token] = await to(authApi.getFacebookToken());

    if (fbError) {
      if (fbError.message === "canceled") {
        return;
      }
      dispatch(updateStatus("failed"));
      dispatch(updateError(fbError.message));
      return;
    }

    const [error, userCredential] = await authApi.signInWithFacebook(token);

    if (error) {
      dispatch(updateStatus("failed"));
      dispatch(updateError("Login with Facebook failed"));
      return;
    }

    dispatch(updateStatus("succeeded"));
    dispatch(updateError(null));
    dispatch(signIn(userCredential.user));
    dispatch(updateStatus("idle"));
  };
};

export const startSignInWithGoogle = () => {
  return async (dispatch: any) => {
    dispatch(updateStatus("loading"));

    const [googleError, accessToken] = await to(authApi.getGoogleToken());

    if (googleError) {
      dispatch(updateStatus("failed"));
      dispatch(updateError("Login with Google failed"));
      return;
    }

    const [error, userCredential] = await authApi.signInWithGoogle(accessToken);

    if (error) return handlerError(dispatch, error.message);

    dispatch(updateStatus("succeeded"));
    dispatch(updateError(null));
    dispatch(signIn(userCredential.user));
    dispatch(updateStatus("idle"));
  };
};

export const startSignInAnonymously = () => {
  return async (dispatch: any) => {
    dispatch(updateStatus("loading"));

    const [error, userCredential] = await authApi.signInAnonymously();

    if (error) {
      dispatch(updateStatus("failed"));
      dispatch(updateError(error.message));
      return;
    }

    dispatch(updateStatus("succeeded"));
    dispatch(updateError(null));
    dispatch(signIn(userCredential.user));
    dispatch(updateStatus("idle"));
  };
};

export const signOut = () => ({
  type: "SIGN_OUT",
  payload: {},
});

export const startSignOut = () => {
  return async (dispatch: any) => {
    await authApi.signOut();
    dispatch(signOut());
  };
};
