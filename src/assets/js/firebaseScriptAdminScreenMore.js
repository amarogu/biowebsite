import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
} from "firebase/auth";
import {
  where,
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  query,
} from "firebase/firestore";
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
const firestore = getFirestore(app);
const answers = [];
const tableData = document.getElementById("tableData");
const refreshButtonAdminScreenMore = document.getElementById(
  "refreshButtonAdminScreenMore"
);
let answersCounter = 0;

document.addEventListener("DOMContentLoaded", () => {
  getData();
});

refreshButtonAdminScreenMore.addEventListener("click", () => {
  getData();
});

const getData = async () => {
  /*for (i = 1; i <= 4; i++) {
      queryManager(`answers[${question}]`, "===", `${i}`);
    }
    query.forEach((query) => {
      getDocs(query).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          docs.push(doc);
          console.log(docs);
        });
      });
    });*/
  const answersDoc = await getDoc(
    doc(firestore, "users", "WdKFh5GHarsRSY3JHiXg")
  );
  const querySnapshot = await getDocs(collection(firestore, "users"));
  querySnapshot.forEach((doc) => {
    console.log(doc.data().answers);
    // answers.push(doc.data().answers[question]);

    if (doc.data().user === answersDoc.data().user) {
      return;
    }

    if (doc.data().answers[0] === answersDoc.data().answers[0]) {
      answersCounter++;
    }
    if (doc.data().answers[1] === answersDoc.data().answers[1]) {
      answersCounter++;
    }
    if (doc.data().answers[2] === answersDoc.data().answers[2]) {
      answersCounter++;
    }
    if (doc.data().answers[3] === answersDoc.data().answers[3]) {
      answersCounter++;
    }
    if (doc.data().answers[4] === answersDoc.data().answers[4]) {
      answersCounter++;
    }

    tableData.insertAdjacentHTML(
      "afterbegin",
      `
        <tr>
            <td>${doc.data().user}</td>
            <td>${answersCounter}</td>
        </tr>
    `
    );

    answersCounter = 0;
  });

  /*answersFiltered.answer1 = answers.filter((answer) => answer === 1).length;
  answersFiltered.answer2 = answers.filter((answer) => answer === 2).length;
  answersFiltered.answer3 = answers.filter((answer) => answer === 3).length;
  answersFiltered.answer4 = answers.filter((answer) => answer === 4).length;
  answersFiltered.question = question;
  console.log(answersFiltered);*/
};
