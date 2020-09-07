import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    //firebase->project->settings->SDK/config
    apiKey: "AIzaSyC4JMM6Z5Qn7NnjNCZ7ET3IFXbt5PVqTV4",
    authDomain: "clone-924c0.firebaseapp.com",
    databaseURL: "https://clone-924c0.firebaseio.com",
    projectId: "clone-924c0",
    storageBucket: "clone-924c0.appspot.com",
    messagingSenderId: "8777842181",
    appId: "1:8777842181:web:d96875f38a4841a94c266c",
    measurementId: "G-C38JGQEMVQ"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};