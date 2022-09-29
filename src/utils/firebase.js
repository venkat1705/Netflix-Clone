
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBdP5rej0LzHmyDs4qPDm9tXWQvKIjIdUs",
  authDomain: "netflix-clone-e5e06.firebaseapp.com",
  projectId: "netflix-clone-e5e06",
  storageBucket: "netflix-clone-e5e06.appspot.com",
  messagingSenderId: "261151123834",
  appId: "1:261151123834:web:06abf78f5b3ebe0f6d8ec3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);