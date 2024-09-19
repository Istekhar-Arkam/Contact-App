import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC30zYj-9lyt1fwQ2Avm3K9rcW7gHeq_pg",
  authDomain: "contact-app-4c524.firebaseapp.com",
  projectId: "contact-app-4c524",
  storageBucket: "contact-app-4c524.appspot.com",
  messagingSenderId: "664032120717",
  appId: "1:664032120717:web:2d71f8cd68ae09ef37f7c4",
  measurementId: "G-Z46RDXM6GW",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
