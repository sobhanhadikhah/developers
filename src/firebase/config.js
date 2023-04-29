import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import 'firebase/auth';
import 'firebase/firestore';
//import { config } from 'dotenv';

//config()
const firebaseConfig = {
  apiKey: "AIzaSyD6oaKhi4tJUAFWztH9ZNN1Y_I3GY10AgI",
  authDomain: "developer-opa.firebaseapp.com",
  projectId: "developer-opa",
  storageBucket: "developer-opa.appspot.com",
  messagingSenderId: "527323579008",
  appId: "1:527323579008:web:ee9bf0fcf4f2dd7ac0dc65"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();