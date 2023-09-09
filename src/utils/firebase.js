// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuhhGOIctkS8kSUgTTcWtWhviWvZZH3bc",
  authDomain: "blog-e75a7.firebaseapp.com",
  projectId: "blog-e75a7",
  storageBucket: "blog-e75a7.appspot.com",
  messagingSenderId: "581411498730",
  appId: "1:581411498730:web:297fcca0ad634c4f464593",
  measurementId: "G-K6RMQ5Q0NQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);