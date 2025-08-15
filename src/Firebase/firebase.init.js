// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPK5efP6X27LYzY8cGHUMyOg8UEAfVgts",
  authDomain: "technology-zone-authentication.firebaseapp.com",
  projectId: "technology-zone-authentication",
  storageBucket: "technology-zone-authentication.firebasestorage.app",
  messagingSenderId: "526125014201",
  appId: "1:526125014201:web:aa269cdf9f2a2f14b68f68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);