// import anime from "./anime.js";
import img1 from "../img/icons8-1-circulado.svg";
import img2 from "../img/icons8-2-circulado.svg";
import img3 from "../img/icons8-3-circulado.svg";
import img4 from "../img/icons8-4-circulado.svg";
import img5 from "../img/icons8-5-circulado.svg";
import img6 from "../img/icons8-1-circulado (1).svg";
import img7 from "../img/icons8-2-circulado (1).svg";
import img8 from "../img/icons8-3-circulado (1).svg";
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
/*const observedItem = document.querySelector(".observed-item");
const body = document.body;
const scroller = document.getElementById("scroller");
window.addEventListener("scroll", () => {
  if (observedItem.getBoundingClientRect().y < 0) {
    console.log("Observed");
    observedItem.style.position = "fixed";
    observedItem.style.top = "-60px";
  }
});*/

const sectionItems = document.getElementById("sectionItems");
/*const dataFirst = [
  "Title",
  "Subtitle",
  "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.",
  img6,
  document.querySelector(".first-card"),
  {
    titleElement: document.querySelector(".first-title"),
    subtitleElement: document.querySelector(".first-subtitle"),
    contentElement: document.querySelector(".first-content"),
    img: document.getElementById("first-image"),
  },
];
const dataSecond = [
  "Title",
  "Subtitle",
  "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.",
  img7,
  document.querySelector(".second-card"),
  {
    titleElement: document.querySelector(".second-title"),
    subtitleElement: document.querySelector(".second-subtitle"),
    contentElement: document.querySelector(".second-content"),
    img: document.getElementById("second-image"),
  },
];
const dataThird = [
  "Title",
  "Subtitle",
  "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.",
  img8,
  document.querySelector(".third-card"),
  {
    titleElement: document.querySelector(".third-title"),
    subtitleElement: document.querySelector(".third-subtitle"),
    contentElement: document.querySelector(".third-content"),
    img: document.getElementById("third-image"),
  },
];

const itemCard1 = {
  title: "",
  subtitle: "",
  content: "",
  img: "",
};

const itemCard2 = {
  title: "",
  subtitle: "",
  content: "",
  img: "",
};

const itemCard3 = {
  title: "",
  subtitle: "",
  content: "",
  img: "",
};

const defineItemData1 = (title, subtitle, content, img) => {
  itemCard1.title = title;
  itemCard1.subtitle = subtitle;
  itemCard1.content = content;
  itemCard1.img = `${img}`;
};

const defineItemData2 = (title, subtitle, content, img) => {
  itemCard2.title = title;
  itemCard2.subtitle = subtitle;
  itemCard2.content = content;
  itemCard2.img = `${img}`;
};

const defineItemData3 = (title, subtitle, content, img) => {
  itemCard3.title = title;
  itemCard3.subtitle = subtitle;
  itemCard3.content = content;
  itemCard3.img = `${img}`;
};

const renderItemData = (element, itemCard) => {
  element[5].titleElement.innerHTML = itemCard.title;
  element[5].subtitleElement.innerHTML = itemCard.subtitle;
  element[5].contentElement.innerHTML = itemCard.content;
  element[5].img.setAttribute("src", itemCard.img);
};

let itemCounter = -1;

sectionItems.addEventListener("click", () => {
  itemCounter++;
  if (itemCounter === 3) {
    itemCounter = 0;
  }
  switch (itemCounter) {
    case 0:
      defineItemData1(
        dataSecond[0],
        dataSecond[1],
        dataSecond[2],
        dataSecond[3]
      );
      defineItemData2(dataThird[0], dataThird[1], dataThird[2], dataThird[3]);
      defineItemData3(dataFirst[0], dataFirst[1], dataFirst[2], dataFirst[3]);
      renderItemData(dataFirst, itemCard1);
      renderItem(dataSecond, itemCard2);
      renderItem(dataThird, itemCard3);
      break;
    case 1:
      defineItemData(
        dataSecond[0],
        dataSecond[1],
        dataSecond[2],
        dataSecond[3]
      );
      renderItemData(dataSecond);
      break;
    case 3:
      defineItemData(dataThird[0], dataThird[1], dataThird[2], dataThird[3]);
      renderItemData(dataThird);
      break;
    default:
      console.log("An error has occurred.");
  }
});*/

const firstTitle = document.querySelector(".first-title");
const firstSubtitle = document.querySelector(".first-subtitle");
const firstContent = document.querySelector(".first-content");
const firstImage = document.getElementById("first-image");
const firstItemElements = [firstTitle, firstSubtitle, firstContent, firstImage];

const secondTitle = document.querySelector(".second-title");
const secondSubtitle = document.querySelector(".second-subtitle");
const secondContent = document.querySelector(".second-content");
const secondImage = document.getElementById("second-image");
const secondItemElements = [
  secondTitle,
  secondSubtitle,
  secondContent,
  secondImage,
];

const thirdTitle = document.querySelector(".third-title");
const thirdSubtitle = document.querySelector(".third-subtitle");
const thirdContent = document.querySelector(".third-content");
const thirdImage = document.getElementById("third-image");
const thirdItemElements = [thirdTitle, thirdSubtitle, thirdContent, thirdImage];

const first = {
  title: "",
  subtitle: "",
  content: "",
  image: "",
};

const second = {
  title: "",
  subtitle: "",
  content: "",
  image: "",
};

const third = {
  title: "",
  subtitle: "",
  content: "",
  image: "",
};

const defineItemData = (element, title, subtitle, content, image) => {
  element.title = title;
  element.subtitle = subtitle;
  element.content = content;
  element.image = `${image}`;
};

const renderFirstItemData = () => {
  firstTitle.innerHTML = first.title;
  firstSubtitle.innerHTML = first.subtitle;
  firstContent.innerHTML = first.content;
  firstImage.setAttribute("src", first.image);
};

const renderSecondItemData = () => {
  secondTitle.innerHTML = second.title;
  secondSubtitle.innerHTML = second.subtitle;
  secondContent.innerHTML = second.content;
  secondImage.setAttribute("src", second.image);
};

const renderThirdItemData = () => {
  thirdTitle.innerHTML = third.title;
  thirdSubtitle.innerHTML = third.subtitle;
  thirdContent.innerHTML = third.content;
  thirdImage.setAttribute("src", third.image);
};

let clickCounter = 0;
sectionItems.addEventListener("click", () => {
  clickCounter++;

  if (clickCounter === 1) {
    defineItemData(
      second,
      "Diferenças",
      "Diferenças entre a inspiração e expiração.",
      "Resumindo, a pressão interna na expiração é maior do que na inspiração, mas tem mais! Será explicado quais são as diferenças entre estes movimentos mecânicos que ocorrem ao respirarmos!",
      img8
    );
    defineItemData(
      third,
      "Expiração",
      "O que é a expiração?",
      "A expiração consiste no conjunto de movimentos que resulta na retirada do ar do interior das vias respiratórias um processo fundamental para garantir a retirada de gás carbônico no nosso organismo e é determinado pelo relaxamento dos músculos intercostais e do diafragma.",
      img6
    );
    defineItemData(
      first,
      "Inspiração",
      "O que é a inspiração?",
      "A inspiração é o processo que controla a entrada de ar para os pulmões e é determinada pela contração do diafragma e dos músculos intercostais, levando a expansão da caixa torácica e diminuição da pressão em seu interior.",
      img7
    );
  } else if (clickCounter === 2) {
    defineItemData(
      third,
      "Inspiração",
      "O que é a inspiração?",
      "A inspiração é o processo que controla a entrada de ar para os pulmões e é determinada pela contração do diafragma e dos músculos intercostais, levando a expansão da caixa torácica e diminuição da pressão em seu interior.",
      img7
    );
    defineItemData(
      first,
      "Diferenças",
      "Diferenças entre a inspiração e expiração.",
      "Resumindo, a pressão interna na expiração é maior do que na inspiração, mas tem mais! Será explicado quais são as diferenças entre estes movimentos mecânicos que ocorrem ao respirarmos!",
      img8
    );
    defineItemData(
      second,
      "Expiração",
      "O que é a expiração?",
      "A expiração consiste no conjunto de movimentos que resulta na retirada do ar do interior das vias respiratórias um processo fundamental para garantir a retirada de gás carbônico no nosso organismo e é determinado pelo relaxamento dos músculos intercostais e do diafragma.",
      img6
    );
  } else if (clickCounter === 3) {
    defineItemData(
      first,
      "Expiração",
      "O que é a expiração?",
      "A expiração consiste no conjunto de movimentos que resulta na retirada do ar do interior das vias respiratórias um processo fundamental para garantir a retirada de gás carbônico no nosso organismo e é determinado pelo relaxamento dos músculos intercostais e do diafragma.",
      img6
    );
    defineItemData(
      second,
      "Inspiração",
      "O que é a inspiração?",
      "A inspiração é o processo que controla a entrada de ar para os pulmões e é determinada pela contração do diafragma e dos músculos intercostais, levando a expansão da caixa torácica e diminuição da pressão em seu interior.",
      img7
    );
    defineItemData(
      third,
      "Diferenças",
      "Diferenças entre a inspiração e expiração.",
      "Resumindo, a pressão interna na expiração é maior do que na inspiração, mas tem mais! Será explicado quais são as diferenças entre estes movimentos mecânicos que ocorrem ao respirarmos!",
      img8
    );
  }

  firstItemElements.forEach((element) => opacityManager(element, false));
  secondItemElements.forEach((element) => opacityManager(element, false));
  thirdItemElements.forEach((element) => opacityManager(element, false));
  setTimeout(() => {
    renderFirstItemData();
    renderSecondItemData();
    renderThirdItemData();
  }, 200);
  setTimeout(() => {
    firstItemElements.forEach((element) => opacityManager(element, true));
    secondItemElements.forEach((element) => opacityManager(element, true));
    thirdItemElements.forEach((element) => opacityManager(element, true));
  }, 200);

  if (clickCounter === 3) {
    clickCounter = 0;
  }

  console.log(first, second, third);
  console.log(clickCounter);
});
