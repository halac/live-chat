import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBGo60TBeYploqzlHFgIclwCFPqVtoEH48",
    authDomain: "abdirisak-firebase-site.firebaseapp.com",
    projectId: "abdirisak-firebase-site",
    storageBucket: "abdirisak-firebase-site.appspot.com",
    messagingSenderId: "428907351709",
    appId: "1:428907351709:web:b68084e570df026bd78e74"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }