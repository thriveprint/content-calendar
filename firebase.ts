// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-wsJJ24siHcl7GIRLqWI7L0dOULc2cCw",
  authDomain: "content-calendar-planly.firebaseapp.com",
  projectId: "content-calendar-planly",
  storageBucket: "content-calendar-planly.appspot.com",
  messagingSenderId: "456133493370",
  appId: "1:456133493370:web:5207325e6e24fe321171c3",
  measurementId: "G-MLC7XGH1T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
