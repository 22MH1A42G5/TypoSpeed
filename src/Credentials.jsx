// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHSYXzfOYwI8Xmxq5dG3R71_FRuZ2i9mo",
  authDomain: "typospeed-ee17a.firebaseapp.com",
  databaseURL: "https://typospeed-ee17a-default-rtdb.firebaseio.com",
  projectId: "typospeed-ee17a",
  storageBucket: "typospeed-ee17a.firebasestorage.app",
  messagingSenderId: "1027928375265",
  appId: "1:1027928375265:web:a277d9b1d74b453c6bdca0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);