// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9TYpjRwZeut5i-F2tD_d_z3s8tbcRC1g",
    authDomain: "netflix-gpt-7f7d5.firebaseapp.com",
    projectId: "netflix-gpt-7f7d5",
    storageBucket: "netflix-gpt-7f7d5.appspot.com",
    messagingSenderId: "665176112246",
    appId: "1:665176112246:web:4d8d6c83e343e3090df357",
    measurementId: "G-YLL9P7JETS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();