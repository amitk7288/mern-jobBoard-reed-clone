// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-jobboard-reed-clone.firebaseapp.com",
  projectId: "mern-jobboard-reed-clone",
  storageBucket: "mern-jobboard-reed-clone.firebasestorage.app",
  messagingSenderId: "161994830803",
  appId: "1:161994830803:web:0b68f8ac5403d7266bb526",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
