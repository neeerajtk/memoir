import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAQfU5LYVy9DhtM2ClY2sRPm2lpcebE_B8",
    authDomain: "memoir-c34e0.firebaseapp.com",
    databaseURL: "https://memoir-c34e0.firebaseio.com",
    projectId: "memoir-c34e0",
    storageBucket: "memoir-c34e0.appspot.com",
    messagingSenderId: "753404609742",
    appId: "1:753404609742:web:eb616434d015fee0fc3c9f"
  };

  firebase.initializeApp(config);

