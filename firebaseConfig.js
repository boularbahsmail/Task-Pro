import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBji6P17f6LZyhND3NbEmhc53_FRQaVfXw",
    authDomain: "task-pro-c9060.firebaseapp.com",
    projectId: "task-pro-c9060",
    storageBucket: "task-pro-c9060.appspot.com",
    messagingSenderId: "650991941968",
    appId: "1:650991941968:web:a77113a240bbb787261455"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
