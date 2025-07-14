import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiAfnztUfPAGeRNeonE_dW2ERy6mjcl-I",
  authDomain: "pranav-nerkar-portfolio.firebaseapp.com",
  projectId: "pranav-nerkar-portfolio",
  storageBucket: "pranav-nerkar-portfolio.firebasestorage.app",
  messagingSenderId: "578422781751",
  appId: "1:578422781751:web:d10eeee69a9b9319670cb2",
  measurementId: "G-WYK63517DV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app); 