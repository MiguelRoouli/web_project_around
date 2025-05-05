const buttonEdit = document.querySelector(".main__button_edit");
const popup = document.querySelector(".popup");
const buttonClose = document.querySelector(".popup__button_close");
const form = document.querySelector(".popup__container");
const inName = document.querySelector(".main__paragraph_name");
const inAbout = document.querySelector(".main__paragraph_about");
const inputName = document.querySelector(".popup__input_name");
const inputAbout = document.querySelector(".popup__input_about");

function openEdit() {
  inputName.value = inName.textContent;
  inputAbout.value = inAbout.textContent;
  popup.classList.toggle("popup_opened");
}

buttonEdit.addEventListener("click", openEdit);
buttonClose.addEventListener("click", openEdit);

function saveChange(evt) {
  evt.preventDefault();
  inName.textContent = inputName.value;
  inAbout.textContent = inputAbout.value;
  openEdit();
}

form.addEventListener("submit", saveChange);
