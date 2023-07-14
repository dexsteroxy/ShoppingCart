// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaQuKxsmryQAVkfpGmTYpX72FKUcLP-zg",
  authDomain: "shoppingcart-8a32e.firebaseapp.com",
  projectId: "shoppingcart-8a32e",
  storageBucket: "shoppingcart-8a32e.appspot.com",
  messagingSenderId: "934411554783",
  appId: "1:934411554783:web:d6f3fc2f68a36817a3be6a",
  measurementId: "G-L1PZHBD1J0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig