// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
const firestore = getFirestore(app);
// const signUpBtn = document.getElementById("sign-up-btn");
const emailString = document.getElementById("email");
let emailStringExtracted = emailString.value;
// const passwordString = document.getElementById("password");
// let passwordStringExtracted = passwordString.value;
const messages = document.getElementById("messages");
const bodyContainer = document.getElementById("bodyContainer");
const userEmail = document.getElementById("userEmail");
const answerButton = document.getElementById("answerButton");
const successContainer = document.getElementById("successContainer");
const logInUpBtn = document.getElementById("log-in-up-btn");
const questions = `
    <form
      class="w-100 vh-100 justify-content-center align-items-center"
      action=""
      id="questionOne"
    >
      <div style='max-width: 484px;'>
        <div class="d-flex align-items-center">
          <img
            class="me-2"
            src="assets/img/icons8-1-circulado.svg"
            alt=""
            id="questionImage"
          />
          <h2 class="mb-0" id="questionTitle">Pergunta 1</h2>
        </div>
        <p id="questionDescription">Pergunta / Descri????o sobre o exerc??cio!</p>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radio"
            id="radio1"
            value="option1"
          />
          <label class="form-check-label" for="radio1" id="answer1">
            Op????o 1
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radio"
            id="radio2"
            value="option2"
          />
          <label class="form-check-label" for="radio2" id="answer2">
            Op????o 2
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radio"
            id="radio3"
            value="option3"
          />
          <label class="form-check-label" for="radio3" id="answer3">
            Op????o 3
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="radio"
            id="radio4"
            value="option4"
          />
          <label class="form-check-label" for="radio4" id="answer4">
            Op????o 4
          </label>
        </div>
        <div class="mt-4">
          <a class="btn btn-primary" id="nextQuestionButton">
            Pr??xima quest??o
          </a>
        </div>
      </div>
    </form>
`;
const questionsContainer = document.getElementById("questionsContainer");

/*emailString.addEventListener("change", () => {
  emailStringExtracted = emailString.value;
  console.log(emailStringExtracted);
});

passwordString.addEventListener("change", () => {
  passwordStringExtracted = passwordString.value;
  console.log(passwordStringExtracted);
});*/

const descriptionParagraph = document.getElementById("descriptionParagraph");
const paragraph = document.getElementById("paragraph");

logInUpBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  emailStringExtracted = emailString.value;
  if (emailStringExtracted === "") {
    messages.innerHTML = "Insira os dados!";
    return;
  }
  await getDoc(doc(firestore, "users", emailStringExtracted)).then(
    (docSnap) => {
      if (docSnap.exists()) {
        answers.classList.add("d-flex");
        bodyContainer.classList.remove("d-flex");
        bodyContainer.classList.add("d-none");
        numberAnswers.classList.add("d-none");
        progressAnswers.classList.add("d-none");
        descriptionParagraph.innerHTML =
          "Voc?? j?? completou o formul??rio ou o usu??rio j?? est?? em uso! Para voltar ?? tela inicial, basta clicar na seta de retorno!";
        paragraph.classList.add("d-none");
        return;
      } else {
        console.log("Document does not exist.");
        firstLogInScreen(emailStringExtracted);
      }
    }
  );
  await setDoc(doc(firestore, "users", emailStringExtracted), {
    user: emailStringExtracted,
    answers: selectedAnswers,
    answered: false,
  });
  questionsContainer.innerHTML = questions;
  const nextQuestionButton = document.getElementById("nextQuestionButton");
  addNextButtonEventListener(nextQuestionButton, answerButton);
  /*signInAnonymously(auth)
    .then(() => {
      auth.name = emailStringExtracted;
      getDoc(doc(firestore, "users", auth.currentUser.uid)).then((docSnap) => {
        if (docSnap.exists()) {
          if (docSnap.data().answered) {
            answers.classList.add("d-flex");
            bodyContainer.classList.remove("d-flex");
            bodyContainer.classList.add("d-none");
            numberAnswers.classList.add("d-none");
            progressAnswers.classList.add("d-none");
            descriptionParagraph.innerHTML =
              "Voc?? j?? completou o formul??rio! Para voltar ?? tela inicial, basta clicar na seta de retorno!";
            paragraph.classList.add("d-none");
          }
        } else {
          console.log("Document does not exist.");
          firstLogInScreen(auth.name);
        }
        questionsContainer.innerHTML = questions;
        const nextQuestionButton =
          document.getElementById("nextQuestionButton");
        addNextButtonEventListener(nextQuestionButton);
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });*/
});

/*
signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  passwordStringExtracted = passwordString.value;
  emailStringExtracted = emailString.value;
  if (passwordStringExtracted === "" || emailStringExtracted === "") {
    messages.innerHTML = "Insira os dados!";
    return;
  }
  createUserWithEmailAndPassword(
    auth,
    emailStringExtracted,
    passwordStringExtracted
  )
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      getDoc(doc(firestore, "users", auth.currentUser.uid)).then((docSnap) => {
        if (docSnap.exists()) {
          if (docSnap.data().answered) {
            answers.classList.add("d-flex");
            bodyContainer.classList.remove("d-flex");
            bodyContainer.classList.add("d-none");
            numberAnswers.classList.add("d-none");
            progressAnswers.classList.add("d-none");
            descriptionParagraph.innerHTML =
              "Voc?? j?? completou o formul??rio! Para voltar ?? tela inicial, basta clicar na seta de retorno!";
            paragraph.classList.add("d-none");
          }
        } else {
          console.log("Document does not exist.");
          firstLogInScreen(userCredential);
        }
      });
      questionsContainer.innerHTML = questions;
      const nextQuestionButton = document.getElementById("nextQuestionButton");
      addNextButtonEventListener(nextQuestionButton);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      if (errorCode === "auth/invalid-email") {
        messages.innerHTML = "Endere??o de Email inv??lido.";
      }

      if (errorCode === "auth/weak-password") {
        messages.innerHTML =
          "A senha precisa conter no m??nimo seis caracteres.";
      }
    });
});

logInUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  passwordStringExtracted = passwordString.value;
  emailStringExtracted = emailString.value;
  if (passwordStringExtracted === "" || emailStringExtracted === "") {
    messages.innerHTML = "Insira os dados!";
    return;
  }
  signInWithEmailAndPassword(
    auth,
    emailStringExtracted,
    passwordStringExtracted
  )
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      getDoc(doc(firestore, "users", auth.currentUser.uid)).then((docSnap) => {
        if (docSnap.exists()) {
          if (docSnap.data().answered) {
            answers.classList.add("d-flex");
            bodyContainer.classList.remove("d-flex");
            bodyContainer.classList.add("d-none");
            numberAnswers.classList.add("d-none");
            progressAnswers.classList.add("d-none");
            descriptionParagraph.innerHTML =
              "Voc?? j?? completou o formul??rio! Para voltar ?? tela inicial, basta clicar na seta de retorno!";
            paragraph.classList.add("d-none");
          }
        } else {
          console.log("Document does not exist.");
          firstLogInScreen(userCredential);
        }
      });
      questionsContainer.innerHTML = questions;
      const nextQuestionButton = document.getElementById("nextQuestionButton");
      addNextButtonEventListener(nextQuestionButton);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      if (errorCode === "auth/wrong-password") {
        messages.innerHTML = "Senha incorreta!";
      }
    });
  console.log(auth.currentUser);
});*/

const firstLogInScreen = (userCredential) => {
  bodyContainer.classList.remove("d-flex");
  bodyContainer.classList.add("d-none");
  successContainer.classList.remove("d-none");
  successContainer.classList.add("d-flex");
  successContainer.classList.add("flex-column");
  successContainer.classList.add("align-items-center");
  successContainer.classList.add("justify-content-center");
  userEmail.innerHTML = `${userCredential}`;
};

document.addEventListener("DOMContentLoaded", () => {
  if (auth.currentUser !== null) {
    firstLogInScreen();
    console.log("Logged in");
  }
});

const renderQuestionData = (questionData) => {
  questionImage.src = questionData.img;
  questionTitle.innerHTML = questionData.title;
  questionDescription.innerHTML = questionData.description;
  answer1.innerHTML = questionData.answers[0];
  answer2.innerHTML = questionData.answers[1];
  answer3.innerHTML = questionData.answers[2];
  answer4.innerHTML = questionData.answers[3];
};

const showQuestion = (question) => {
  question.classList.add("d-flex");
  successContainer.classList.remove("d-flex");
  successContainer.classList.add("d-none");
};

const questionOneData = {
  title: "Pergunta 1",
  description: "Durante a expira????o e inspira????o, ocorrem, respectivamente:",
  answers: [
    "A contra????o e relaxamento dos m??sculos intercostais.",
    "O relaxamento e contra????o do diafragma.",
    "A diminui????o e aumento da press??o intrapulmonar.",
    "O aumento e diminui????o da caixa tor??xica.",
  ],
  img: img1,
};

const questionTwoData = {
  title: "Pergunta 2",
  description: "Os alv??olos s??o respons??veis por:",
  answers: [
    "Encaminhar o ar a traqueia e aos pulm??es.",
    "Filtrar, umedecer e aquecer o ar para conduzi-lo aos pulm??es.",
    "Transportar as hem??cias pelo indiv??duo.",
    "Realizar trocas gasosas, do g??s carb??nico e oxig??nio.",
  ],
  img: img2,
};

const questionThreeData = {
  title: "Pergunta 3",
  description: "Qual das defini????es abaixo ?? a correta quanto ?? hematose?",
  answers: [
    "?? a entrada de oxig??nio nos alv??olos, que passam para os vasos sangu??neos capilares, que por sua vez, liberam g??s carb??nico.",
    "?? a troca de hem??cias que ocorre quando expiramos.",
    "?? o processo de forma????o das hem??cias.",
    "S??o os movimentos sangu??neos que ocorrem no corpo, que causam a agita????o de hem??cias.",
  ],
  img: img3,
};

const questionFourData = {
  title: "Pergunta 4",
  description:
    "Sabemos que o ar inspirado passa inicialmente pelas narinas e cavidades nasais. Nesse local encontramos pelos e muco que:",
  answers: [
    "atuam resfriando o ar e fornecendo prote????o contra entrada de micro-organismos.",
    "atuam auxiliando no processo de hematose.",
    "atuam retirando impurezas do ar, como poeira e agentes patog??nicos.",
    "atuam resfriando e umedecendo o ar.",
  ],
  img: img4,
};

const questionFiveData = {
  title: "Pergunta 5",
  description:
    "Sabemos que a respira????o s?? ?? poss??vel em virtude da movimenta????o conjunta de costelas, m??sculos intercostais e diafragma, que determinam os movimentos de inspira????o e expira????o. A respeito desses dois processos, marque a alternativa correta.",
  answers: [
    "No processo de inspira????o ocorre a contra????o dos m??sculos intercostais e do diafragma, ocasionando uma press??o interna maior que a externa.",
    "A expira????o ?? o movimento respons??vel pela entrada de ar pelas vias respirat??rias.",
    "Na inspira????o ocorre o relaxamento do diafragma e dos m??sculos intercostais, fazendo com que o t??rax aumente de tamanho.",
    "No processo de expira????o ocorre a sa??da de ar dos pulm??es em raz??o de uma diminui????o no volume da caixa tor??cica e um aumento da press??o interna.",
  ],
  img: img5,
};
/* const questionTwo = document.getElementById("questionTwo");
const questionThree = document.getElementById("questionThree");
const questionFour = document.getElementById("questionFour");
const questionFive = document.getElementById("questionFive"); */
let currentQuestion;
let previousQuestionLocal;
let counter = 1;
let selectedAnswer;
let selectedAnswers = [];

const addNextButtonEventListener = (nextQuestionButton, answerButton) => {
  const questionOne = document.getElementById("questionOne");
  const questionImage = document.getElementById("questionImage");
  const questionTitle = document.getElementById("questionTitle");
  const questionDescription = document.getElementById("questionDescription");
  const answer1 = document.getElementById("answer1");
  const answer2 = document.getElementById("answer2");
  const answer3 = document.getElementById("answer3");
  const answer4 = document.getElementById("answer4");
  const radio1 = document.getElementById("radio1");
  const radio2 = document.getElementById("radio2");
  const radio3 = document.getElementById("radio3");
  const radio4 = document.getElementById("radio4");
  answerButton.addEventListener("click", () => {
    currentQuestion = questionOne;
    showQuestion(questionOne);
    renderQuestionData(questionOneData);
  });
  nextQuestionButton.addEventListener("click", () => {
    counter++;
    if (counter === 7) {
      return;
    }

    if (radio1.checked) {
      selectedAnswer = 1;
    } else if (radio2.checked) {
      selectedAnswer = 2;
    } else if (radio3.checked) {
      selectedAnswer = 3;
    } else if (radio4.checked) {
      selectedAnswer = 4;
    }

    selectedAnswers.push(selectedAnswer);

    switch (counter) {
      case 2:
        renderQuestionData(questionTwoData);
        break;
      case 3:
        renderQuestionData(questionThreeData);
        break;
      case 4:
        renderQuestionData(questionFourData);
        break;
      case 5:
        renderQuestionData(questionFiveData);
        break;
      case 6:
        loadAnswersData(questionOne);
        break;
      default:
        console.log("An error has occurred.");
    }

    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;
    radio4.checked = false;
    console.log(counter);
    console.log(selectedAnswer, selectedAnswers);
  });
};

const loadAnswersData = async (question) => {
  const answers = document.getElementById("answers");
  const numberAnswers = document.getElementById("numberAnswers");
  const progressAnswers = document.getElementById("progressAnswers");
  let snap;
  let userSnap;
  let answersCount = 0;
  answers.classList.add("d-flex");
  question.classList.remove("d-flex");
  await setDoc(doc(firestore, "users", emailStringExtracted), {
    user: emailStringExtracted,
    answers: selectedAnswers,
    answered: true,
  });
  await getDoc(doc(firestore, "users", "WdKFh5GHarsRSY3JHiXg")).then(
    (docSnap) => {
      snap = docSnap.data();
    }
  );
  await getDoc(doc(firestore, "users", emailStringExtracted)).then(
    (docSnap) => {
      userSnap = docSnap.data();
    }
  );
  if (snap.answers[0] === userSnap.answers[0]) {
    answersCount++;
  }

  if (snap.answers[1] === userSnap.answers[1]) {
    answersCount++;
  }

  if (snap.answers[2] === userSnap.answers[2]) {
    answersCount++;
  }

  if (snap.answers[3] === userSnap.answers[3]) {
    answersCount++;
  }

  if (snap.answers[4] === userSnap.answers[4]) {
    answersCount++;
  }

  if (answersCount === 0) {
    numberAnswers.innerHTML = "0%";
    // progressAnswers.classList.remove("w-100");
    progressAnswers.style.width = "0%";
  } else if (answersCount === 1) {
    numberAnswers.innerHTML = "20%";
    // progressAnswers.classList.remove("w-100");
    progressAnswers.style.width = "20%";
  } else if (answersCount === 2) {
    numberAnswers.innerHTML = "40%";
    // progressAnswers.classList.remove("w-100");
    progressAnswers.style.width = "40%";
  } else if (answersCount === 3) {
    numberAnswers.innerHTML = "60%";
    // progressAnswers.classList.remove("w-100");
    progressAnswers.style.width = "60%";
  } else if (answersCount === 4) {
    numberAnswers.innerHTML = "80%";
    // progressAnswers.classList.remove("w-100");
    progressAnswers.style.width = "80%";
  } else if (answersCount === 5) {
    numberAnswers.innerHTML = "100%";
    // progressAnswers.classList.remove("w-100");
    progressAnswers.style.width = "100%";
  }
};

// Auth management through firestore database, since there is no need for credential usage, only user identification such as nickname. THERE IS NO SENSITIVE DATA BEING STORED IN THIS APP!
