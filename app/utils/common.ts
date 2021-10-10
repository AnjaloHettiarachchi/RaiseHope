import { firebase, storage } from "../firebase";
import "react-native-get-random-values";
import uuid from "uuid";
import { Asset } from "expo-asset";

export function currencyFormat(num: number) {
  return `Rs. ${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;
}

export async function getFileAsBlobAsync(uri: string) {
  return new Promise<Blob>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      resolve(xhr.response);
    };
    xhr.onerror = (e: any) => {
      console.log(e);
      reject(new TypeError("Network request failed."));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send();
  });
}

export async function uploadImage(uri: string) {
  const blob = await getFileAsBlobAsync(uri);
  const fileRef = storage.ref(`/post-cover-images/${uuid.v4()}`);
  const uploadTask = await fileRef.put(blob);
  if (uploadTask.state !== firebase.storage.TaskState.SUCCESS)
    throw new Error("Cover Image upload failed.");

  return uploadTask.ref.getDownloadURL();
}

export async function getCachedAssets(coverImages: string[]) {
  const assets = await Asset.loadAsync(coverImages);
  return assets.map(a => a.localUri);
}
