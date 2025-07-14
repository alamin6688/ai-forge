
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB63ENGwBoVjhjuyaPKFRkb7jFR4xBnuAQ",
  authDomain: "ai-tool-d8515.firebaseapp.com",
  projectId: "ai-tool-d8515",
  storageBucket: "ai-tool-d8515.firebasestorage.app",
  messagingSenderId: "491158750777",
  appId: "1:491158750777:web:7c01a93d84d197c8b06fe8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
