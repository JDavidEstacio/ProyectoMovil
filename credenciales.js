// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbr_Z8sh9jAJ2lGCw-GSEpbfNx3j54eyY",
  authDomain: "aplicacionmovil-ef5bd.firebaseapp.com",
  projectId: "aplicacionmovil-ef5bd",
  storageBucket: "aplicacionmovil-ef5bd.appspot.com",
  messagingSenderId: "342927538838",
  appId: "1:342927538838:web:5b608ba889e77bff03a0b7"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;