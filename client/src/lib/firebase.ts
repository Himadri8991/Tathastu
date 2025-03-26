import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfAgLK6xmVBhI3qsCGEj1NPJ7W9yEM_m0",
  authDomain: "tathastu-38f16.firebaseapp.com",
  projectId: "tathastu-38f16",
  storageBucket: "tathastu-38f16.firebasestorage.app",
  messagingSenderId: "176113838167",
  appId: "1:176113838167:web:77cb437fe27c42a5f19b12",
  measurementId: "G-99QX1YRMX4"
};
// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

// Initialize Firebase authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export function loginWithGoogle() {
  signInWithRedirect(auth, provider);
}

export default app;
// Removed redundant export of auth