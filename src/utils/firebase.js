// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBhfIEZoOVE6BMdkhY2GLySQN-WXAbARM",
  authDomain: "netflix-gpt-d80c1.firebaseapp.com",
  projectId: "netflix-gpt-d80c1",
  storageBucket: "netflix-gpt-d80c1.appspot.com",
  messagingSenderId: "520626779683",
  appId: "1:520626779683:web:e0b663ddca57496befe396",
  measurementId: "G-C6MLCT4S12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();