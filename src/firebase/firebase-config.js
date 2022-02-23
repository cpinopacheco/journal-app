import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD51qYsTxnAuNYPYGs0hvkNFXVFUH0-SMA",
  authDomain: "react-app-curso-46b23.firebaseapp.com",
  projectId: "react-app-curso-46b23",
  storageBucket: "react-app-curso-46b23.appspot.com",
  messagingSenderId: "615355423326",
  appId: "1:615355423326:web:be9e4bf32cc193733cf2cf",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
