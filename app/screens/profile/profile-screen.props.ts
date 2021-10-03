export interface ProfileScreenProps {
  /**
   * The user name
   */
  userFirstName: string;
  /**
   * A callback to sign out from the app
   */
  signOut: () => void;
  /**
   * react-navigation navigation prop
   */
  navigation: any;
}
