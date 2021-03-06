var popupWriteLink = document.querySelector(".button-contact-us"),
    popupWrite = document.querySelector(".modal-question"),
    userName = popupWrite.querySelector("[name=user-name]"),
    userEmail = popupWrite.querySelector("[name=user-email]"),
    popupWriteForm = popupWrite.querySelector("form"),
    popupMapLink = document.querySelector(".main-contacts-map"),
    popupMap = document.querySelector(".modal-map"),
    popupWriteClose = document.querySelector(".modal-close-question"),
    popupMapClose = document.querySelector(".modal-close-map"),
    popupWriteError = document.querySelector(".question-icon-user");

popupWriteLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.add("modal-question-active");
  userName.focus();
})

popupWriteForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value) {
    evt.preventDefault();
    popupWriteError.classList.add("question-icon-error");
  }
})

popupWriteClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.remove("modal-question-active");
  popupWriteError.classList.remove("question-icon-error");
})

popupMapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-map-active");
})

popupMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-map-active");
})