import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
  apiKey: "AIzaSyCIMJG6V-xgWYefUPQ36We51UwwfGsSNf4",
  authDomain: "redux-bac8b.firebaseapp.com",
  databaseURL: "https://redux-bac8b-default-rtdb.firebaseio.com",
  projectId: "redux-bac8b",
  storageBucket: "redux-bac8b.appspot.com",
  messagingSenderId: "639319753339",
  appId: "1:639319753339:web:51cfc3d4b24c7ba1bb98de"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {database as default}