// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmQZU0g3iAJzMObzh3JGyW7q2dwMUNdYg",
  authDomain: "app01-912b9.firebaseapp.com",
  projectId: "app01-912b9",
  storageBucket: "app01-912b9.appspot.com",
  messagingSenderId: "546262251703",
  appId: "1:546262251703:web:be30257f8932ce0c5f7532"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

export const auth=getAuth()