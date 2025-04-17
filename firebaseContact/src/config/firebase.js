// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArnRXKu4KaNNVmpnguCCKhtQ0RtcROarM",
  authDomain: "contact-react-b619f.firebaseapp.com",
  projectId: "contact-react-b619f",
  storageBucket: "contact-react-b619f.firebasestorage.app",
  messagingSenderId: "917599710511",
  appId: "1:917599710511:web:0235de10685af8804885da",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
