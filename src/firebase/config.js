import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

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
  const firebaseConfig  = firebase.firestore()

  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectAuth, firebaseConfig, timestamp}
