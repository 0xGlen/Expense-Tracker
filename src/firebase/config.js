import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBpybMmQK7hmJMDwYrrjR8J5riYc5v0Oys",
    authDomain: "expense-tracker-23a5f.firebaseapp.com",
    projectId: "expense-tracker-23a5f",
    storageBucket: "expense-tracker-23a5f.appspot.com",
    messagingSenderId: "833556806313",
    appId: "1:833556806313:web:93d66ef85314383c0987b8"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  // timestamp
  const timestamp = firebase.firestore.Timestamp


  export {projectFirestore, projectAuth, timestamp}