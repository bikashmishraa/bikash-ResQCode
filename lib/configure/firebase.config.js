// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz-V86x32hKq3BvXP_g6cb0maS29HTqCA",
  authDomain: "testing-275a2.firebaseapp.com",
  projectId: "testing-275a2",
  storageBucket: "testing-275a2.firebasestorage.app",
  messagingSenderId: "399678910431",
  appId: "1:399678910431:web:3d1424f196143c52eede6a",
  measurementId: "G-7JJZ092DQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)