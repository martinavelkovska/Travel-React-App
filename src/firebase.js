
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYP93MmA4Es9Ql7usdF_bTK0kMoZSEpag",
  authDomain: "travel-project-730b7.firebaseapp.com",
  databaseURL: "https://travel-project-730b7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "travel-project-730b7",
  storageBucket: "travel-project-730b7.appspot.com",
  messagingSenderId: "97207698608",
  appId: "1:97207698608:web:6cc527dc2af7861b03e775",
  measurementId: "G-2RK6BGNPJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);