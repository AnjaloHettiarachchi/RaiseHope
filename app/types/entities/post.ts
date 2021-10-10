import { Profile } from "./profile";

export interface Post {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  raisedAmount: number;
  goalAmount: number;
  goalDate: string;
  likes: number;
  shares: number;
  createdBy: Profile;
  createdOn: string;
  modifiedOn?: string;
}

export interface CreatePost {
  title: string;
  description: string;
  coverImage: string;
  raisedAmount: number;
  goalAmount: number;
  goalDate: string;
  likes: number;
  shares: number;
  createdBy: string;
  createdOn: string;
  modifiedOn?: string;
}
