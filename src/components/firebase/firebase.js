import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3IcntDD6GnicYzO_AQOTbnitBvXdHmtU",
  authDomain: "admin-panel-c5717.firebaseapp.com",
  projectId: "admin-panel-c5717",
  storageBucket: "admin-panel-c5717.appspot.com",
  messagingSenderId: "571986229953",
  appId: "1:571986229953:web:5f838385b5dc58844c7240",
  measurementId: "G-NRXJXTB8HM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);