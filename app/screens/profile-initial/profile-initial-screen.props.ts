import { Profile } from "../../types";

export interface ProfileInitialScreenProps {
  /**
   * Save `Profile` data.
   * @param profile object to be saved
   * @return void
   */
  addProfile: (profile: Profile) => void;
}
