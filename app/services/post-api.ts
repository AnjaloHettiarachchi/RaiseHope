import { firestore } from "../firebase";
import { Post, Profile } from "../types";

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
