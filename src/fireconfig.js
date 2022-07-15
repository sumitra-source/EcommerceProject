// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnSr9KEJmHavsmQ8tnnFWn09WQxVaZh2A",
  authDomain: "firecommerce-d7ea6.firebaseapp.com",
  projectId: "firecommerce-d7ea6",
  storageBucket: "firecommerce-d7ea6.appspot.com",
  messagingSenderId: "1029161212997",
  appId: "1:1029161212997:web:6382ba97ab7c13a8ea972c",
  measurementId: "G-D775EZ7T83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);

export default fireDB;
