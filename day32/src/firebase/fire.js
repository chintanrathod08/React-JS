// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXcRPhnLM_QMnYtq9Jenr62XiJomP3Guw",
  authDomain: "registeration-form-de2fd.firebaseapp.com",
  projectId: "registeration-form-de2fd",
  storageBucket: "registeration-form-de2fd.firebasestorage.app",
  messagingSenderId: "296730908582",
  appId: "1:296730908582:web:6de899feff08d7178fe167"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)