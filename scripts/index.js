const buttonEdit = document.querySelector(".main__button_edit");
const buttonAdd = document.querySelector(".main__button_add");
const buttonClose = document.querySelector(".popup__button_close");
const popButtonSave = document.querySelector(".popup__button_save");
const popButtonAdd = document.querySelector(".popup__button_add");
const popup = document.querySelector(".popup");
const form = document.querySelector(".popup__container");
const popimg = document.querySelector(".popup__images");
const gallery = document.querySelector(".main__gallery");
const inName = document.querySelector(".main__paragraph_name");
const inAbout = document.querySelector(".main__paragraph_about");
const inpName = document.querySelector(".popup__input_name");
const inpAbout = document.querySelector(".popup__input_about");
const title = document.querySelector(".popup__subtitle");
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "./images/valle-yosemite.png",
  },
  {
    name: "Lago Louise",
    link: "./images/lago-louise.png",
  },
  {
    name: "Montañas Calvas",
    link: "./images/montanas-calvas.png",
  },
  {
    name: "Latemar",
    link: "./images/latemar.png",
  },
  {
    name: "Vanois National Park",
    link: "./images/vanois-park.png",
  },
  {
    name: "Lago di Braies",
    link: "./images/lago-braies.png",
  },
];

function openEditAdd(e) {
  const butClass = e.target.classList;
  if (butClass.contains("main__button_edit")) {
    inpName.value = inName.textContent;
    inpAbout.value = inAbout.textContent;
    title.textContent = "Editar perfil";
    inpName.placeholder = "Nombre";
    inpAbout.placeholder = "Acerca de mi";
    popup.classList.toggle("popup_opened");
    popButtonSave.style.display = "block";
    popButtonAdd.style.display = "none";
    popimg.style.display = "none";
  } else if (butClass.contains("main__button_add")) {
    inpName.value = "";
    inpAbout.value = "";
    title.textContent = "Nuevo lugar";
    inpName.placeholder = "Título";
    inpAbout.placeholder = "Enlace a la imagen";
    popup.classList.toggle("popup_opened");
    popButtonSave.style.display = "none";
    popButtonAdd.style.display = "block";
    popimg.style.display = "none";
    inpName.addEventListener("input", validarCampos);
    inpAbout.addEventListener("input", validarCampos);
    validarCampos();
  }
}

function close() {
  popup.classList.toggle("popup_opened");
  popimg.removeAttribute("style");
  form.removeAttribute("style");
}

buttonEdit.addEventListener("click", openEditAdd);
buttonClose.addEventListener("click", close);
buttonAdd.addEventListener("click", openEditAdd);

function saveChangeEdit(e) {
  e.preventDefault();
  inName.textContent = inpName.value;
  inAbout.textContent = inpAbout.value;
  close();
}

form.addEventListener("submit", saveChangeEdit);

function cardsInitials() {
  initialCards.forEach((item) => {
    const cardTemplate = document.querySelector("#main__template").content;
    const cardElement = cardTemplate
      .querySelector(".main__gallery-card")
      .cloneNode(true);
    cardElement.querySelector(".main__gallery-image").src = item.link;
    cardElement.querySelector(".main__gallery-image").alt = item.name;
    cardElement.querySelector(".main__gallery-paragraph").textContent =
      item.name;
    cardElement
      .querySelector(".main__button_like")
      .addEventListener("click", function (e) {
        e.target.classList.toggle("main__button_like_active");
      });
    cardElement
      .querySelector(".main__button_trash")
      .addEventListener("click", function () {
        cardElement.remove();
      });
    cardElement
      .querySelector(".main__gallery-image")
      .addEventListener("click", function () {
        imagePopup(item.name, item.link);
      });
    gallery.append(cardElement);
  });
}
cardsInitials();

function cardsAdd(titleValue, linkValue) {
  const cardTemplate = document.querySelector("#main__template").content;
  const cardElement = cardTemplate
    .querySelector(".main__gallery-card")
    .cloneNode(true);
  cardElement.querySelector(".main__gallery-image").src = linkValue;
  cardElement.querySelector(".main__gallery-image").alt = titleValue;
  cardElement.querySelector(".main__gallery-paragraph").textContent =
    titleValue;
  cardElement
    .querySelector(".main__button_like")
    .addEventListener("click", function (e) {
      e.target.classList.toggle("main__button_like_active");
    });
  cardElement
    .querySelector(".main__button_trash")
    .addEventListener("click", function () {
      cardElement.remove();
    });
  cardElement
    .querySelector(".main__gallery-image")
    .addEventListener("click", function () {
      imagePopup(titleValue, linkValue);
    });
  gallery.prepend(cardElement);
}

function validarCampos() {
  popButtonAdd.disabled = !(inpName.value && inpAbout.value);
}

popButtonAdd.addEventListener("click", function () {
  cardsAdd(inpName.value, inpAbout.value);
  close();
});

function imagePopup(name, title) {
  const popimag = popimg.querySelector(".popup__image");
  const poptxt = popimg.querySelector(".popup__paragraph");
  popimag.src = title;
  popimag.alt = name;
  poptxt.textContent = name;
  popup.classList.toggle("popup_opened");
  form.style.display = "none";
}
