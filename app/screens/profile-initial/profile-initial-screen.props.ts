import { ProfileData } from "../../actions/profile/types";

export interface ProfileInitialScreenProps {
  /**
   * Save `Profile` data.
   * @param profile object to be saved
   * @return void
   */
  addProfile: (profile: ProfileData) => void;
}
