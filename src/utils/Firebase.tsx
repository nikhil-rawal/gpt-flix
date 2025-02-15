// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp4CDM-6qcf3WliNJ24ysicRyXSbjVh_g",
  authDomain: "gpt-flix-nikhil-rawal.firebaseapp.com",
  projectId: "gpt-flix-nikhil-rawal",
  storageBucket: "gpt-flix-nikhil-rawal.firebasestorage.app",
  messagingSenderId: "429929120349",
  appId: "1:429929120349:web:391a8229a331b3f73583b4",
  measurementId: "G-EBC9PJC3RS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics, app };
