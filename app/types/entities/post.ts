import { Profile } from "./profile";

export interface Post {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  raisedAmount: number;
  goalAmount: number;
  likes: number;
  shares: number;
  createdBy: Profile;
}
