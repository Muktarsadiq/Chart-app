// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore' 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH1DEWIKN4YfTV8gR_IXLWTeoIeZJo-GU",
  authDomain: "my-chat-app-e37b7.firebaseapp.com",
  projectId: "my-chat-app-e37b7",
  storageBucket: "my-chat-app-e37b7.appspot.com",
  messagingSenderId: "296573186701",
  appId: "1:296573186701:web:0ec4392b393a39b48d28c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)