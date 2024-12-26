// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyDIpieCdHlwZeihwtztMk-oKrrH_WlqWFQ",
    authDomain: "login-88327.firebaseapp.com",
    projectId: "login-88327",
    storageBucket: "login-88327.firebasestorage.app",
    messagingSenderId: "705722758840",
    appId: "1:705722758840:web:3219f2472f92154486a64d",
    measurementId: "G-XJXYYBBJ0Y"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 

export { db, auth }; 


