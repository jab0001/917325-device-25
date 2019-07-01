var buttonDelivery = document.querySelector(".delivery-button"),
    buttonWarranty = document.querySelector(".warranty-button"),
    buttonCredit = document.querySelector(".credit-button"),
    deliveryInfo = document.querySelector(".delivery-info"),
    warrantyInfo = document.querySelector(".warranty-info"),
    creditInfo = document.querySelector(".credit-info");


buttonDelivery.addEventListener("click", function (evt) {
        evt.preventDefault();
        deliveryInfo.classList.add(".info-show");
})

buttonWarranty.addEventListener("click", function (evt) {
        evt.preventDefault();
        warrantyInfo.classList.add(".info-show");
})

buttonCredit.addEventListener("click", function (evt) {
        evt.preventDefault();
        creditInfo.classList.add(".info-show");
})