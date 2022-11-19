// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCr9y7jfulpwx9bSw2Y-Mp1XhF0R9aIAsg",
  authDomain: "netflix-clone-bd159.firebaseapp.com",
  projectId: "netflix-clone-bd159",
  storageBucket: "netflix-clone-bd159.appspot.com",
  messagingSenderId: "252888565391",
  appId: "1:252888565391:web:a0ae4d1f44451c910d12fa",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const auth = firebase.auth();
const auth = getAuth(firebaseApp);

export { auth };

export default db;
