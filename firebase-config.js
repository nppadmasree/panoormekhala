// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk7fnSQlWC4rQJK48YI5KaRCr8bYbiU0k",
  authDomain: "panoormekhalakalolsavam.firebaseapp.com",
  projectId: "panoormekhalakalolsavam",
  storageBucket: "panoormekhalakalolsavam.firebasestorage.app",
  messagingSenderId: "669280715595",
  appId: "1:669280715595:web:548c4e722646ea44f35ece",
  measurementId: "G-97JSHP7PL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
