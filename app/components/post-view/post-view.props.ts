export interface PostViewProps {
  /**
   * `ID` property of the Post.
   */
  id: string;
  /**
   * `CoverImage` property of the Post.
   */
  coverImage: string;
  /**
   * `Title` property of the Post.
   */
  title: string;
  /**
   * `Description` property of the Post.
   */
  description: string;
  /**
   * `RaisedAmount` property of the Post.
   */
  raisedAmount: number;
  /**
   * `GoalAmount` property of the Post.
   */
  goalAmount: number;
  /**
   * No. of Likes property of the Post.
   */
  likes: number;
  /**
   * No. of Shares property of the Post.
   */
  shares: number;
  /**
   * `onPress` event for the PostView
   */
  onPress: () => void;
}
