import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC64HSKhY2FWXCycNfkOjCY4Q15wq9kIwg",
  authDomain: "fir-project-exam-1.firebaseapp.com",
  projectId: "fir-project-exam-1",
  storageBucket: "fir-project-exam-1.firebasestorage.app",
  messagingSenderId: "573902490475",
  appId: "1:573902490475:web:3631ef4818f0dee9665a2e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 