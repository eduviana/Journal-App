// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// import { getEnvironments } from "../helpers/getEnvironments";

// const {
//   VITE_APIKEY,
//   VITE_AUTHDOMAIN,
//   VITE_PROJECTID,
//   VITE_STORAGEBUCKET,
//   VITE_MESSAGINGSENDERID,
//   VITE_APPID,
// } = getEnvironments();
// console.log(process.env)
// console.log(import.meta.env)

//Dev/Prod
const firebaseConfig = {
  apiKey: "AIzaSyCgZvFKrDl4ScaFtC4JECqqwabp3HKyLJw",
  authDomain: "journalapp-d6f28.firebaseapp.com",
  projectId: "journalapp-d6f28",
  storageBucket: "journalapp-d6f28.appspot.com",
  messagingSenderId: "801330464848",
  appId: "1:801330464848:web:463bf2079b98f89fc9e955"
};

//Testing
// const firebaseConfig = {
//   apiKey: VITE_APIKEY,
//   authDomain: VITE_AUTHDOMAIN,
//   projectId: VITE_PROJECTID,
//   storageBucket: VITE_STORAGEBUCKET,
//   messagingSenderId: VITE_MESSAGINGSENDERID,
//   appId: VITE_APPID,
// };


// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
