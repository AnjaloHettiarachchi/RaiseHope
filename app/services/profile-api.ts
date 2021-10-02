import { firestore } from "../firebase";
import { Profile } from "../types";

export async function create(uid: string, profile: Profile) {
  return await firestore.collection("accounts").doc(uid).set(profile);
}

export async function get(uid: string) {
  const profileSnapshot = await firestore.collection("accounts").doc(uid).get();
  return profileSnapshot.data() as Profile;
}
