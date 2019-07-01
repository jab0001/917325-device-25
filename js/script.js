var popupWriteLink = document.querySelector(".button-contact-us"),
    popupWrite = document.querySelector(".modal-question"),
    popupMapLink = document.querySelector(".main-contacts-map"),
    popupMap = document.querySelector(".modal-map"),
    popupWriteClose = document.querySelector(".modal-close-question"),
    popupMapClose = document.querySelector(".modal-close-map");

popupWriteLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.add("modal-question-active");
})

popupWriteClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.remove("modal-question-active");
})

popupMapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-map-active");
})

popupMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-map-active");
})