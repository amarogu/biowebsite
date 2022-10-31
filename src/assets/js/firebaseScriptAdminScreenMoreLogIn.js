// Import the functions you need from the SDKs you need
/*import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import img1 from "../img/icons8-1-circulado.svg";
import img2 from "../img/icons8-2-circulado.svg";
import img3 from "../img/icons8-3-circulado.svg";
import img4 from "../img/icons8-4-circulado.svg";
import img5 from "../img/icons8-5-circulado.svg";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKN--3owrpJwHlw-hb3YplQdHPTyVwGEM",
  authDomain: "respiracao-9b7ec.firebaseapp.com",
  projectId: "respiracao-9b7ec",
  storageBucket: "respiracao-9b7ec.appspot.com",
  messagingSenderId: "544991184600",
  appId: "1:544991184600:web:da44beff31ac60666379ad",
  measurementId: "G-57YZVVC5Z7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);*/
const logInUpButton = document.getElementById("log-in-up-btn");
// const signUpBtn = document.getElementById("sign-up-btn");
const emailString = document.getElementById("email");
let emailStringExtracted = emailString.value;
const passwordString = document.getElementById("password");
let passwordStringExtracted = passwordString.value;
const bodyContainer = document.getElementById("bodyContainer");
const chartsAnswers = document.getElementById("chartsAnswers");
const tableDataAnswers = document.getElementById("tableDataAnswers");
// const passwordString = document.getElementById("password");
// let passwordStringExtracted = passwordString.value;

logInUpButton.addEventListener("click", (e) => {
  e.preventDefault();
  emailStringExtracted = emailString.value;
  passwordStringExtracted = passwordString.value;
  if (emailStringExtracted === "" || passwordStringExtracted === "") {
    messages.innerHTML = "Insira os dados!";
    return;
  }
  signInWithEmailAndPassword(
    auth,
    emailStringExtracted,
    passwordStringExtracted
  )
    .then((userCredentials) => {
      console.log(userCredentials.user);
      bodyContainer.classList.add("d-none");
      chartsAnswers.classList.remove("d-none");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      if (errorCode === "auth/user-not-found") {
        messages.innerHTML = "Conta inexistente.";
      }
      if (errorCode === "auth/wrong-password") {
        messages.innerHTML = "Senha incorreta.";
      }
    });
});
