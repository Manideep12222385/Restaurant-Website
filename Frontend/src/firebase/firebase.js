import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyDOsEBk9C5EPzU06JfBI2ZIXVZIwjhTqVc",
  authDomain: "kanishka-dhaba.firebaseapp.com",
  projectId: "kanishka-dhaba",
  storageBucket: "kanishka-dhaba.appspot.com",
  messagingSenderId: "1042019638031",
  appId: "1:1042019638031:web:f22bb0c330ba5e569c3c7a",
  measurementId: "G-XTWVGTHNB9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };