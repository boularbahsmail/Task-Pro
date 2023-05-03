import firebase from "firebase/app";
import "firebase/firestore";

// Firebase configuration
const config = {
    apiKey: "AIzaSyBji6P17f6LZyhND3NbEmhc53_FRQaVfXw",
    authDomain: "task-pro-c9060.firebaseapp.com",
    projectId: "task-pro-c9060",
    storageBucket: "task-pro-c9060.appspot.com",
    messagingSenderId: "650991941968",
    appId: "1:650991941968:web:a77113a240bbb787261455"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const firestore = firebase.firestore();

export { firestore };