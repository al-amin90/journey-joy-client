// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyzHnWECXAf6PrtQjDt981TSDl_ui-OgQ",
  authDomain: "journey-joy-client.firebaseapp.com",
  projectId: "journey-joy-client",
  storageBucket: "journey-joy-client.appspot.com",
  messagingSenderId: "987468790984",
  appId: "1:987468790984:web:ddf66fad603a7d298779fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;