// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT-V8sJytQdvbt5xvtPMt4iYB6Ssdcrms",
  authDomain: "x-project-c.firebaseapp.com",
  projectId: "x-project-c",
  storageBucket: "x-project-c.appspot.com",
  messagingSenderId: "968878361106",
  appId: "1:968878361106:web:a39c521a2f1955233da6cb",
  measurementId: "G-6VF1BFQNZ9"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
