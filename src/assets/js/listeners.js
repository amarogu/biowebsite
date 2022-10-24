// import anime from "./anime.js";
import img1 from "../img/icons8-1-circulado.svg";
import img2 from "../img/icons8-2-circulado.svg";
import img3 from "../img/icons8-3-circulado.svg";
import img4 from "../img/icons8-4-circulado.svg";
import img5 from "../img/icons8-5-circulado.svg";
const addBtns = document.querySelectorAll(".more");
const p = document.querySelectorAll(".disp");
let count = 1;
const firstElements = [
  document.getElementById("one"),
  document.getElementById("two"),
  document.getElementById("three"),
  document.getElementById("four"),
  document.getElementById("five"),
];
const secondElements = [
  document.getElementById("one2"),
  document.getElementById("two2"),
  document.getElementById("three2"),
  document.getElementById("four2"),
  document.getElementById("five2"),
];
const thirdElements = [
  document.getElementById("one3"),
  document.getElementById("two3"),
  document.getElementById("three3"),
  document.getElementById("four3"),
  document.getElementById("five3"),
];
const fourthElements = [
  document.getElementById("one4"),
  document.getElementById("two4"),
  document.getElementById("three4"),
  document.getElementById("four4"),
  document.getElementById("five4"),
];
const fifthElements = [
  document.getElementById("one5"),
  document.getElementById("two5"),
  document.getElementById("three5"),
  document.getElementById("four5"),
  document.getElementById("five5"),
];

const dataSetFirstFalse = [
  "Visão geral",
  "Composição do S.R.",
  "São órgão do sistema respiratório: fossas nasais, faringe, laringe, traqueia, brônquios, bronquíolos, alvéolos e pulmões. ",
];
const dataSetFirstTrue = [
  "Visão geral",
  "Composição do sistema respiratório",
  "Os órgãos do sistema respiratório e como cada um deles funciona 🎉",
];
const dataSetSecondFalse = [
  "Fossas nasais",
  "Primeiro órgão",
  "Ajudar a filtrar o ar que respiramos e aquecer e umidificar o ar que chegará aos pulmões.",
];
const dataSetSecondTrue = [
  "Brônquios",
  "Quinto órgão",
  "Os brônquios são responsáveis por encaminhar o ar a traqueia e aos pulmões 🌫",
];
const dataSetThirdFalse = [
  "Faringe",
  "Segundo órgão",
  "Garantir a passagem de ar, impedir que alimentos entrem no sistema respiratório durante a deglutição (ato de engolir).",
];
const dataSetThirdTrue = [
  "Bronquíolos",
  "Sexto órgão",
  "Transportar o ar aos alvéolos pulmonares, onde ocorre a hematose (troca gasosa).",
];
const dataSetFourthFalse = [
  "Laringe",
  "Terceiro órgão",
  "Ela permite a passagem de ar quando respiramos e também impede que corpos estranhos adentrem as vias respiratórias inferiores, causando infecções nos pulmões.",
];
const dataSetFourthTrue = [
  "Alvéolos",
  "Sétimo órgão",
  "Local de realização de trocas gasosas, em que o gás carbônico, presente no sangue, passa para o interior dos alvéolos, e o oxigênio, presente no ar inspirado, passa, do interior dos alvéolos, para o sangue, esse processo é chamado de hematose.",
];
const dataSetFifthFalse = [
  "Traqueia",
  "Quarto órgão",
  "Ela filtra, umedece e aquece o ar para conduzi-lo aos pulmões.",
];
const dataSetFifthTrue = [
  "Pulmões",
  "Oitavo órgão",
  "Captar oxigênio e livrar-se do dióxido de carbono (CO2).",
];

let target;

addBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // To do: fix the count bug
    if (count === 1) {
      count++;
      btn.style.transform = "rotate(45deg)";
      /*p.forEach((p) =>
        anime({
          targets: p,
          translateX: -55,
          opacity: 0,
        })
      );*/
      if (e.target === addBtns[0]) {
        defineCardData(
          subject,
          dataSetFirstTrue[0],
          dataSetFirstTrue[1],
          dataSetFirstTrue[2],
          e.target
        );
        renderCardData(firstElements, true);
      } else if (e.target === addBtns[1]) {
        defineCardData(
          subject,
          dataSetSecondTrue[0],
          dataSetSecondTrue[1],
          dataSetSecondTrue[2],
          e.target
        );
        renderCardData(secondElements, true);
      } else if (e.target === addBtns[2]) {
        defineCardData(
          subject,
          dataSetThirdTrue[0],
          dataSetThirdTrue[1],
          dataSetThirdTrue[2],
          e.target
        );
        renderCardData(thirdElements, true);
      } else if (e.target === addBtns[3]) {
        defineCardData(
          subject,
          dataSetFourthTrue[0],
          dataSetFourthTrue[1],
          dataSetFourthTrue[2],
          e.target
        );
        renderCardData(fourthElements, true);
      } else if (e.target === addBtns[4]) {
        defineCardData(
          subject,
          dataSetFifthTrue[0],
          dataSetFifthTrue[1],
          dataSetFifthTrue[2],
          e.target
        );
        renderCardData(fifthElements, true);
      }
      console.log(subject);
    } else {
      count = 1;
      btn.style.transform = "rotate(0)";
      if (e.target === addBtns[0]) {
        defineCardData(
          subject,
          dataSetFirstFalse[0],
          dataSetFirstFalse[1],
          dataSetFirstFalse[2],
          e.target
        );
        renderCardData(firstElements, false);
      } else if (e.target === addBtns[1]) {
        defineCardData(
          subject,
          dataSetSecondFalse[0],
          dataSetSecondFalse[1],
          dataSetSecondFalse[2],
          e.target
        );
        renderCardData(secondElements, false);
      } else if (e.target === addBtns[2]) {
        defineCardData(
          subject,
          dataSetThirdFalse[0],
          dataSetThirdFalse[1],
          dataSetThirdFalse[2],
          e.target
        );
        renderCardData(thirdElements, false);
      } else if (e.target === addBtns[3]) {
        defineCardData(
          subject,
          dataSetFourthFalse[0],
          dataSetFourthFalse[1],
          dataSetFourthFalse[2],
          e.target
        );
        renderCardData(fourthElements, false);
      } else if (e.target === addBtns[4]) {
        defineCardData(
          subject,
          dataSetFifthFalse[0],
          dataSetFifthFalse[1],
          dataSetFifthFalse[2],
          e.target
        );
        renderCardData(fifthElements, false);
      }
      console.log(subject);
    }
    // setTimeout(() => renderItem());
  });
});

let topCard;
const renderCardData = (element, inOut) => {
  if (element === firstElements) {
    topCard = true;
  } else {
    topCard = false;
  }
  element.forEach((elementIn) => {
    if (elementIn !== element[3]) {
      opacityManager(elementIn, false);
    } else {
      if (inOut) {
        elementIn.style.opacity = "0";
      } else {
        opacityManager(elementIn, false);
      }
    }

    if (inOut) {
      if (elementIn === element[4]) {
        elementIn.style.backgroundColor = "#00aee0";
      }

      if (elementIn === element[1]) {
        elementIn.classList.remove("text-muted");
      }
      elementIn.style.color = "#f8f9fa";
    }
  });
  setTimeout(() => {
    renderItem(element[0], false, subject.title);
    renderItem(element[1], false, subject.subtitle);
    renderItem(element[2], false, subject.content);
  }, 200);
  setTimeout(() => {
    element.forEach((elementIn) => {
      if (elementIn !== element[3]) {
        opacityManager(elementIn, true);
      } else {
        if (inOut) {
          elementIn.style.opacity = "0";
        } else {
          opacityManager(elementIn, true);
        }
      }

      if (!inOut) {
        if (elementIn === element[4]) {
          if (topCard) {
            elementIn.style.backgroundColor = "#f7f7f7";
          } else {
            elementIn.style.backgroundColor = "#ffffff";
          }
        }

        if (elementIn === element[1]) {
          elementIn.classList.add("text-muted");
        }
        elementIn.style.color = "#212529";
      }
    });
  }, 200);
  if (inOut) {
    subject.rendered = true;
  } else {
    subject.rendered = false;
  }
};

const defineCardData = (subject, title, subtitle, content, id) => {
  subject.title = title;
  subject.subtitle = subtitle;
  subject.content = content;
  subject.id = id;
};

const rightArrow = document.getElementById("rightArrow");
const leftArrow = document.getElementById("leftArrow");
const arrows = [leftArrow, rightArrow];
const ids = [1, 2, 3, 4, 5];
const title = document.getElementById("titleItem");
const img = document.getElementById("imgItem");
const bottomImg = document.getElementById("bottomImgItem");
const subtitle = document.getElementById("subtitleItem");
const desc = document.getElementById("descItem");
const itemElements = [title, img, subtitle, desc];

const defineId = (arrow) => {
  if (arrow === leftArrow) {
    if (item.id == ids[0]) {
      item.id = ids[4];
    } else {
      item.id = ids[ids.indexOf(item.id) - 1];
    }
  }

  if (arrow === rightArrow) {
    if (item.id == ids[4]) {
      item.id = ids[0];
    } else {
      item.id = ids[ids.indexOf(item.id) + 1];
    }
  }

  const itemId = item.id;

  return itemId;
};

const defineData = (item, title, imgSourceId, subtitle, desc) => {
  item.title = title;
  item.imgSource = `${imgSourceId}`;
  item.subtitle = subtitle;
  item.desc = desc;
};

const renderItem = (element, condition, data) => {
  if (condition) {
    element.setAttribute("src", data);
  } else {
    element.innerHTML = data;
  }
};

const opacityManager = (element, inOut) => {
  if (inOut) {
    element.style.opacity = "1";
  } else {
    element.style.opacity = "0";
  }
};

const item = {
  title: "",
  imgSource: "",
  subtitle: "",
  desc: "",
  id: ids[0],
};

const subject = {
  title: "",
  subtitle: "",
  content: "",
  rendered: false,
  id: HTMLElement,
};

arrows.forEach((arrow) =>
  arrow.addEventListener("click", () => {
    const itemId = defineId(arrow);
    if (itemId === ids[0]) {
      defineData(
        item,
        "Fossas nasais",
        img1,
        "Localização",
        "No item um, é possível ver as fossas nasais, e como elas se ligam aos outros órgão do S.R."
      );
    } else if (itemId === ids[1]) {
      defineData(
        item,
        "Laringe",
        img2,
        "😋❌🥒",
        "No item dois é possível ver a laringe, um órgão que também se responsabiliza pela filtragem do ar."
      );
    } else if (itemId === ids[2]) {
      defineData(
        item,
        "Traqueia",
        img3,
        "♨🌫",
        "A traqueia, localizada no item três, aquece e umedece o ar, preparando-os para a entrada no pulmão."
      );
    } else if (itemId === ids[3]) {
      defineData(
        item,
        "Pulmões",
        img4,
        "😀🎉",
        "No item quatro podemos ver os pulmões, que captam oxigênio e livram-se de dióxido de carbono."
      );
    } else {
      defineData(
        item,
        "Diafragma",
        img5,
        "💪🏻🎉😃",
        "No item cinco podemos ver o diafragma, um músculo estriado esquelético que separa a cavidade abdominal da cavidade toráxica."
      );
    }
    itemElements.forEach((element) => opacityManager(element, false));
    renderItem(bottomImg, true, item.imgSource);
    setTimeout(() => {
      renderItem(title, false, item.title);
      renderItem(img, true, item.imgSource);
      renderItem(subtitle, false, item.subtitle);
      renderItem(desc, false, item.desc);
    }, 200);
    setTimeout(
      () => itemElements.forEach((element) => opacityManager(element, true)),
      200
    );
    console.log(item);
  })
);

/*
const observedItems = document.querySelectorAll(".observed-item");
class elementObserver {
  constructor(element, isIntersecting) {
    this.element = element;
    this.isIntersecting = isIntersecting;
  }
}
let elementIntersecting = new elementObserver();
const observer = new IntersectionObserver((entries) =>
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      elementIntersecting = new elementObserver(entry.target, true);
      console.log(elementIntersecting);
      console.log(elementIntersecting.element.scrollTop);
    } else {
      elementIntersecting = new elementObserver(entry.target, false);
      console.log(elementIntersecting);
      console.log(elementIntersecting.element.scrollTop);
    }
  })
);

observedItems.forEach((item) => {
  observer.observe(item);
});*/

/*const warning = document.getElementById("warning");
const backgroundNotActive = document.getElementById("backgroundNotActive");
const closeBtn = document.getElementById("closeBtn");
const body = document.body;
closeBtn.addEventListener("click", () => {
  warning.style.display = "none";
  warning.classList.remove("d-flex");
  backgroundNotActive.style.display = "none";
  body.style = "";
});*/
