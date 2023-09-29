
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/app'


const firebaseConfig = {
  apiKey: "AIzaSyCSCQfVF-Lp1EJKBS1Flh6BIxb1XXmvf3k",
  authDomain: "auth-moha-milon-64618.firebaseapp.com",
  projectId: "auth-moha-milon-64618",
  storageBucket: "auth-moha-milon-64618.appspot.com",
  messagingSenderId: "316605382702",
  appId: "1:316605382702:web:c45b8ea1db7749809f9fbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

