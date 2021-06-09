import firebase from "firebase"; 

const firebaseConfig = {
    apiKey: "AIzaSyAnYr_KdHIRee9KJBOZP0wf6H7_GnhrOYk",
    authDomain: "challenge-7d3e8.firebaseapp.com",
    databaseURL: "https://challenge-7d3e8.firebaseio.com",
    projectId: "challenge-7d3e8",
    storageBucket: "challenge-7d3e8.appspot.com",
    messagingSenderId: "592226642498",
    appId: "1:592226642498:web:2ba7a636ffdbe9100e9bdb",
    measurementId: "G-1RRW233RVK"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };