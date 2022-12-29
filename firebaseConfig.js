import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAic8b06ByYjXEFD-lwrrbdgbUVaSx29w0",
  authDomain: "alifya-fefcd.firebaseapp.com",
  projectId: "alifya-fefcd",
  storageBucket: "alifya-fefcd.appspot.com",
  messagingSenderId: "1005292714647",
  appId: "1:1005292714647:web:3fb2629f8ece4f79fbc7d2",
  measurementId: "G-KGDT1JCQE1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
