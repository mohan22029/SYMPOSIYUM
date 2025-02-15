// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2jTrMljxhVkyL3S8-Z-IngtoW784T-nk",
  authDomain: "sympo-af450.firebaseapp.com",
  projectId: "sympo-af450",
  storageBucket: "sympo-af450.appspot.com",  // Fix: Corrected storage bucket URL
  messagingSenderId: "205796729103",
  appId: "1:205796729103:web:e2c1b619dac159dcbfde7a",
  measurementId: "G-B2Y3B9HY7V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the app to use in other components
export { app, analytics };
