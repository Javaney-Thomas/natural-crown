// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB7G3EHdrYMRRgHaD5Ep_Nw2bbeaZX1eE0",
    authDomain: "naturally-crown.firebaseapp.com",
    projectId: "naturally-crown",
    storageBucket: "naturally-crown.appspot.com",
    messagingSenderId: "1007603936007",
    appId: "1:1007603936007:web:8126b6902580d44f96b3a2",
    measurementId: "G-THSFXBQJED"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};