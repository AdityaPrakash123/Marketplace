// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLGi-NT7AgCnGjH5y5xaqBvinxoQshDR4",
  authDomain: "marketplace-5c4dc.firebaseapp.com",
  projectId: "marketplace-5c4dc",
  storageBucket: "marketplace-5c4dc.firebasestorage.app",
  messagingSenderId: "431382245790",
  appId: "1:431382245790:web:8c3d384929f95a15b2268f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);