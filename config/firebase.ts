// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZwoHaJClVeqjaA-cJ2Wh37YlWq_BB0NM",
  authDomain: "live-b43e8.firebaseapp.com",
  projectId: "live-b43e8",
  storageBucket: "live-b43e8.appspot.com",
  messagingSenderId: "707618309423",
  appId: "1:707618309423:web:083b7634fbbc74e4890dda",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
