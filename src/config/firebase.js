// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmQ57JyoaMNnXOiMnPATsIqK9RaBpbQ9M",
  authDomain: "vite-contact-c6f54.firebaseapp.com",
  projectId: "vite-contact-c6f54",
  storageBucket: "vite-contact-c6f54.appspot.com",
  messagingSenderId: "428171401884",
  appId: "1:428171401884:web:b6d54f73b9c96fb62ceb59"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);