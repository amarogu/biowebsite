// import anime from "./anime.js";
const addBtns = document.querySelectorAll(".more");
// const p = document.querySelectorAll(".disp");
let count = 1;
/*const dataSetFirstFalse = [
  "Visão geral",
  "Composição do S.R.",
  "São órgão do sistema respiratório: fossas nasais, faringe, laringe, traqueia, brônquios, bronquíolos, alvéolos e pulmões. ",
];
const dataSetFirstTrue = [undefined, undefined, undefined];
const dataSetSecondFalse = [
  "Fossas nasais",
  "Primeiro órgão",
  "Ajudar a filtrar o ar que respiramos e aquecer e umidificar o ar que chegará aos pulmões.",
];
const dataSetSecondTrue = [
  "Brônquios",
  "Quinto órgão",
  "Ajudar a filtrar o ar que respiramos e aquecer e umidificar o ar que chegará aos pulmões.",
];*/
addBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (count === 1) {
      btn.style.transform = "rotate(45deg)";
      /*p.forEach((p) =>
        anime({
          targets: p,
          translateX: -55,
          opacity: 0,
        })
      );*/
      /*if (e.target === addBtns[0]) {
        console.log("Data will be defined later...");
      } else if (e.target === addBtns[1]) {
        defineData(subject, "");
      }*/
      count++;
    } else {
      btn.style.transform = "rotate(0)";
      count = 1;
    }
    // setTimeout(() => renderItem());
  });
});

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
  item.imgSource = `assets/img/icons8-${imgSourceId}-circulado.svg`;
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
};

arrows.forEach((arrow) =>
  arrow.addEventListener("click", () => {
    const itemId = defineId(arrow);
    if (itemId === ids[0]) {
      defineData(
        item,
        "Fossas nasais",
        1,
        "Localização",
        "No item um, é possível ver as fossas nasais, e como elas se ligam aos outros órgão do S.R."
      );
    } else if (itemId === ids[1]) {
      defineData(
        item,
        "Laringe",
        2,
        "😋❌🥒",
        "No item dois é possível ver a laringe, um órgão que também se responsabiliza pela filtragem do ar."
      );
    } else if (itemId === ids[2]) {
      defineData(
        item,
        "Traqueia",
        3,
        "♨🌫",
        "A traqueia, localizada no item três, aquece e umedece o ar, preparando-os para a entrada no pulmão."
      );
    } else if (itemId === ids[3]) {
      defineData(
        item,
        "Pulmões",
        4,
        "😀🎉",
        "No item quatro podemos ver os pulmões, que captam oxigênio e livram-se de dióxido de carbono."
      );
    } else {
      defineData(
        item,
        "Diafragma",
        5,
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

const warning = document.getElementById("warning");
const backgroundNotActive = document.getElementById("backgroundNotActive");
const closeBtn = document.getElementById("closeBtn");
const body = document.body;
closeBtn.addEventListener("click", () => {
  warning.style.display = "none";
  warning.classList.remove("d-flex");
  backgroundNotActive.style.display = "none";
  body.style = "";
});
