// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcCR5vHkLbg-dvMZs79nE41jYr_JMH2wE",
  authDomain: "todoapp-f30a4.firebaseapp.com",
  projectId: "todoapp-f30a4",
  storageBucket: "todoapp-f30a4.appspot.com",
  messagingSenderId: "265675380775",
  appId: "1:265675380775:web:9004ccc55a5149560cd602",
  measurementId: "G-63VHLPQHC3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);