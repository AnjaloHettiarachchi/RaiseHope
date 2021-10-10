import { Error, Status, User } from "../../types/entities/auth";

export interface Action {
  type:
    | "SIGN_IN"
    | "SIGN_OUT"
    | "UPDATE_STATUS"
    | "UPDATE_ERROR"
    | "UPDATE_USER_DATA";
  payload?: {
    user?: User;
    status?: Status;
    error?: Error;
  };
}
