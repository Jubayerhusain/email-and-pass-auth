import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDI7RNNvGdKgHrzZdfMSSspb1FVJi5InJ4",
  authDomain: "email-password-auth-9d998.firebaseapp.com",
  projectId: "email-password-auth-9d998",
  storageBucket: "email-password-auth-9d998.firebasestorage.app",
  messagingSenderId: "979822515418",
  appId: "1:979822515418:web:39487502f27745f15ac1e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);