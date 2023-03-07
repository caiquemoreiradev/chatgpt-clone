import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVrEwJaSlcBZaZFIAdT-6BVZLqMnmkjWM",
    authDomain: "chatgpt-bn.firebaseapp.com",
    projectId: "chatgpt-bn",
    storageBucket: "chatgpt-bn.appspot.com",
    messagingSenderId: "317124639125",
    appId: "1:317124639125:web:7eb9156facc53b00bcde9c"
  };

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };