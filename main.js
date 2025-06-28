// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyW9SWtaHB9u7wC6l18YhRmjVHW1jJ5sg",
  authDomain: "loginium-745ad.firebaseapp.com",
  projectId: "loginium-745ad",
  storageBucket: "loginium-745ad.firebasestorage.app",
  messagingSenderId: "729780771583",
  appId: "1:729780771583:web:b5ce928b494a678fe0caca",
  measurementId: "G-DB397PVTW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);