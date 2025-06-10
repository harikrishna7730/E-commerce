// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIkqQ-lZyMg7G3gdIkL4TLrDkqNkXgYYA",
  authDomain: "e-com-74a01.firebaseapp.com",
  projectId: "e-com-74a01",
  storageBucket: "e-com-74a01.firebasestorage.app",
  messagingSenderId: "122297323191",
  appId: "1:122297323191:web:a7e72df7d76ac53c314732",
  measurementId: "G-W3JJFS4JCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
export { auth, provider,facebookProvider };