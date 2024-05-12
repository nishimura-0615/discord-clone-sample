// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const APIKEY = process.env.React_APP_DISCORD_CLONE_API_KEY;
const AUTHDOMAIN = process.env.React_APP_DISCORD_CLONE_AUTHDOMAIN_KEY
const PROJECTID = process.env.React_APP_DISCORD_CLONE_PROJECT_ID
const STORAGEBUCKET = process.env.React_APP_DISCORD_CLONE_STORAGE_BUCKET
const MESSAGINGSENDERID = process.env.React_APP_DISCORD_CLONE_MESSAGING_SENDER_ID
const APPID = process.env.React_APP_DISCORD_CLONE_APP_ID
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
export default db;
