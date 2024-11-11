// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-ZxgAs9PKNHxniG8nSz1U5vOzYVgKCOg",
  authDomain: "gptflix-4fafc.firebaseapp.com",
  projectId: "gptflix-4fafc",
  storageBucket: "gptflix-4fafc.firebasestorage.app",
  messagingSenderId: "1042413744608",
  appId: "1:1042413744608:web:5fabaa05d56ed8b8d97b85",
  measurementId: "G-TK5WJ815R9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
