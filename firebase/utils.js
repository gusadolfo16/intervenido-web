import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "./firebaseConfig";

const storage = getStorage(app);

// Function to upload an image to Firebase Storage
async function uploadImage(image) {
  const imageRef = ref(storage, `images/${image.name}`);
  await uploadBytes(imageRef, image);
  const downloadUrl = await getDownloadURL(imageRef);
  return downloadUrl;
}

// Function to interact with image selection (logic to be implemented
