/*import { initializeApp } from "firebase/app";
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
import img5 from "../img/icons8-5-circulado.svg";*/
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
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
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
import { getAnalytics } from "firebase/analytics";
const refreshButton = document.getElementById("refreshButton");
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const imageNumber = document.getElementById("imageNumber");
const nextClick = document.getElementById("nextClick");
const previousClick = document.getElementById("previousClick");
const answersChart = document.getElementById("answersChart");
let counter = 2;
let localCounter;
let chartData;

refreshButton.addEventListener("click", async () => {
  localCounter = counter;
  localCounter--;
  if (localCounter === 1) {
    renderItem(imageNumber, img1);
    await getData(0);
    renderChartData(chartData);
    chartInit();
  } else if (localCounter === 2) {
    renderItem(imageNumber, img2);
    await getData(1);
    renderChartData(chartData);
    chartInit();
  } else if (localCounter === 3) {
    renderItem(imageNumber, img3);
    await getData(2);
    renderChartData(chartData);
    chartInit();
  } else if (localCounter === 4) {
    renderItem(imageNumber, img4);
    await getData(3);
    renderChartData(chartData);
    chartInit();
  } else if (localCounter === 5) {
    renderItem(imageNumber, img5);
    await getData(4);
    renderChartData(chartData);
    chartInit();
  }
});

const chartDataManager = (data1, data2, data3, data4) => {
  const chartData = `{"type":"bar","data":{"labels":["Alternativas"],"datasets":[{"label":"Alternativa A","backgroundColor":"rgb(37,132,232)","borderColor":"transparent","data":["${data1}"]},{"label":"Alternativa B","backgroundColor":"rgb(245,62,62)","borderColor":"transparent","data":["${data2}"]},{"label":"Alternativa C","backgroundColor":"rgb(31,178,241)","borderColor":"transparent","data":["${data3}"]},{"label":"Alternativa D","backgroundColor":"rgb(242,149,40)","borderColor":"transparent","data":["${data4}"]}]},"options":{"maintainAspectRatio":true,"legend":{"display":true,"labels":{"fontStyle":"normal"}},"title":{"fontStyle":"bold","position":"top"},"scales":{"xAxes":[{"ticks":{"fontStyle":"normal","beginAtZero":true}}],"yAxes":[{"ticks":{"fontStyle":"normal","beginAtZero":true}}]}}}`;
  return chartData;
};

const setChartData = (chartData) => {
  answersChart.setAttribute("data-bss-chart", chartData);
};

const chartInit = () => {
  var charts = document.querySelectorAll("[data-bss-chart]");

  for (var chart of charts) {
    chart.chart = new Chart(chart, JSON.parse(chart.dataset.bssChart));
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  /*console.log(auth.currentUser, "hi");  Hi! */
  /* TEST */
  await getData(0);
  renderChartData(chartData);
  chartInit();
});

const renderChartData = (chartData) => {
  chartData = chartDataManager(
    answersFiltered.answer1,
    answersFiltered.answer2,
    answersFiltered.answer3,
    answersFiltered.answer4
  );
  setChartData(chartData);
  console.log(chartData);
};

const renderItem = (imageNumber, imageNumberNumber) => {
  imageNumber.src = `${imageNumberNumber}`;
};

const queryArray = [];
const docs = [];
let answers = [];
const answersFiltered = {
  answer1: Number,
  answer2: Number,
  answer3: Number,
  answer4: Number,
  question: Number,
};

/*const queryManager = (query) => {
  queryArray.push(query(collection(firestore, "users"), where(query)));
};*/

const getData = async (question) => {
  answers = [];
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
  const querySnapshot = await getDocs(collection(firestore, "users"));
  querySnapshot.forEach((doc) => {
    console.log(doc.data().answers[question]);
    answers.push(doc.data().answers[question]);
  });
  answersFiltered.answer1 = answers.filter((answer) => answer === 1).length;
  answersFiltered.answer2 = answers.filter((answer) => answer === 2).length;
  answersFiltered.answer3 = answers.filter((answer) => answer === 3).length;
  answersFiltered.answer4 = answers.filter((answer) => answer === 4).length;
  answersFiltered.question = question;
  console.log(answersFiltered);
};

nextClick.addEventListener("click", async () => {
  answers = [];
  if (counter === 1) {
    renderItem(imageNumber, img1);
    await getData(0);
    renderChartData(chartData);
    chartInit();
    counter = 2;
  } else if (counter === 2) {
    renderItem(imageNumber, img2);
    await getData(1);
    renderChartData(chartData);
    chartInit();
    counter = 3;
  } else if (counter === 3) {
    renderItem(imageNumber, img3);
    await getData(2);
    renderChartData(chartData);
    chartInit();
    counter = 4;
  } else if (counter === 4) {
    renderItem(imageNumber, img4);
    await getData(3);
    renderChartData(chartData);
    chartInit();
    counter = 5;
  } else if (counter === 5) {
    renderItem(imageNumber, img5);
    await getData(4);
    renderChartData(chartData);
    chartInit();
    counter = 1;
  }
});

previousClick.addEventListener("click", async () => {
  if (counter === 1) {
    renderItem(imageNumber, img1);
    await getData(0);
    renderChartData(chartData);
    chartInit();
    counter = 5;
  } else if (counter === 2) {
    renderItem(imageNumber, img2);
    await getData(1);
    renderChartData(chartData);
    chartInit();
    counter = 1;
  } else if (counter === 3) {
    renderItem(imageNumber, img3);
    await getData(2);
    renderChartData(chartData);
    chartInit();
    counter = 2;
  } else if (counter === 4) {
    renderItem(imageNumber, img4);
    await getData(3);
    renderChartData(chartData);
    chartInit();
    counter = 3;
  } else if (counter === 5) {
    renderItem(imageNumber, img5);
    await getData(4);
    renderChartData(chartData);
    chartInit();
    counter = 4;
  }
});
