let buttonEdit = document.querySelector(".main__button_edit");
let popup = document.querySelector(".popup");
let buttonClose = document.querySelector(".popup__button_close");
let form = document.querySelector(".popup__container");
let inName = document.querySelector(".main__paragraph_name");
let inAbout = document.querySelector(".main__paragraph_about");
let inputName = document.querySelector(".popup__input_name");
let inputAbout = document.querySelector(".popup__input_about");

function openEdit() {
  inputName.value = inName.textContent;
  inputAbout.value = inAbout.textContent;
  popup.classList.toggle("popup_opened");
}

buttonEdit.addEventListener("click", openEdit);
buttonClose.addEventListener("click", openEdit);
