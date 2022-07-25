// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFgPbOfJN76MJo-pgCJoHZ51rz04qQDuk",
  authDomain: "auth-6209e.firebaseapp.com",
  projectId: "auth-6209e",
  storageBucket: "auth-6209e.appspot.com",
  messagingSenderId: "66108868596",
  appId: "1:66108868596:web:0a4b05952b9e452af21ba1",
};

// Initialize Firebase
// bacd
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const singInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("result", result);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
