// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKxoTTaWodgtbJD7uLbMOxeycKS-Wl_2Q",
  authDomain: "resqcode-9c9b6.firebaseapp.com",
  projectId: "resqcode-9c9b6",
  storageBucket: "resqcode-9c9b6.firebasestorage.app",
  messagingSenderId: "712679327127",
  appId: "1:712679327127:web:92acbff74ba27eee7ff0d2",
  measurementId: "G-JJ4FJ1SDDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)
export const messaging = getMessaging(app);

export const generateToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    console.log(permission)
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey:"BFl84bLFngHsg5x7ScYpzPGju9qgL9CogzND1ZdrGzIfneLVIDNLuwsOZLsGvuONXT_5ykcUnpPxBbAZq2ERfXg"
      })
      console.log(token);
    }
  } catch (error) {
    console.log(error);
  }
};
