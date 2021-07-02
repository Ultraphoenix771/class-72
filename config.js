import  firebase from "firebase"
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyBr39E8RYfayOAnHioqm38RCgY0vMV0dFY",
    authDomain: "wily-bea28.firebaseapp.com",
    projectId: "wily-bea28",
    storageBucket: "wily-bea28.appspot.com",
    messagingSenderId: "929560765247",
    appId: "1:929560765247:web:556cc4c1ded6d6ec87a98a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()