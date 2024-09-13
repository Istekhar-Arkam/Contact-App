// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC30zYj-9lyt1fwQ2Avm3K9rcW7gHeq_pg",
  authDomain: "contact-app-4c524.firebaseapp.com",
  projectId: "contact-app-4c524",
  storageBucket: "contact-app-4c524.appspot.com",
  messagingSenderId: "664032120717",
  appId: "1:664032120717:web:2d71f8cd68ae09ef37f7c4",
  measurementId: "G-Z46RDXM6GW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore(app)