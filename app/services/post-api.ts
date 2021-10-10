import { firestore } from "../firebase";
import { Post, Profile } from "../types";
import { CreatePost } from "../types/entities/post";
import { uploadImage } from "../utils/common";

export async function getAll() {
  const posts: Array<Post> = [];
  const querySnapshot = await firestore.collection("posts").get();
  for (const docSnapshot of querySnapshot.docs) {
    const post = docSnapshot.data() as Post;
    post.id = docSnapshot.id;
    const createdUser = await firestore
      .collection("accounts")
      .doc(docSnapshot.get("createdBy"))
      .get();
    post.createdBy = createdUser.data() as Profile;
    posts.push(post);
  }
  return posts;
}

export async function create(post: CreatePost) {
  post.coverImage = await uploadImage(post.coverImage);
  return await firestore.collection("posts").doc().set(post);
}

export async function get(postId: string) {
  const postSnapshot = await firestore.collection("posts").doc(postId).get();
  return postSnapshot.data() as Post;
}
