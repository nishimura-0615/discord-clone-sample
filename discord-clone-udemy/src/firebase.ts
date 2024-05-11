// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeSCZNZd5p1XepDoJ_B8hnaDlh1PwyGyU",
  authDomain: "discord-clone-udemy-2e16c.firebaseapp.com",
  projectId: "discord-clone-udemy-2e16c",
  storageBucket: "discord-clone-udemy-2e16c.appspot.com",
  messagingSenderId: "876496745429",
  appId: "1:876496745429:web:af0edd7cb196aea4bb035c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
export default db;
