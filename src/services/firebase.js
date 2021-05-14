import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAF6S_pJActcvSF1ub9uBdka2aTpEqqBNg",
    authDomain: "coffeestasie.firebaseapp.com",
    projectId: "coffeestasie",
    storageBucket: "coffeestasie.appspot.com",
    messagingSenderId: "572943315123",
    appId: "1:572943315123:web:7681968c26c63380f840c6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();

export default db;