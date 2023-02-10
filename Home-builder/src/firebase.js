import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyA_8iExuZS1n0rHSTYD4aDptZLX2KUnKWo",

  authDomain: "homebuilder-d3f38.firebaseapp.com",

  projectId: "homebuilder-d3f38",

  storageBucket: "homebuilder-d3f38.appspot.com",

  messagingSenderId: "781264582557",

  appId: "1:781264582557:web:87b429d177ba6d7d886174"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();