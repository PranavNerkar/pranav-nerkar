import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSIwq24mVIvzkqokixIyh-q2fxjdQGQF8",
  authDomain: "pranav-nerkar-portfolio-756e5.firebaseapp.com",
  projectId: "pranav-nerkar-portfolio-756e5",
  storageBucket: "pranav-nerkar-portfolio-756e5.firebasestorage.app",
  messagingSenderId: "657210858207",
  appId: "1:657210858207:web:749564a680c3379730e76a",
  measurementId: "G-G1BMR89868"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app); 