var ButtonDelivery = document.querySelector(".delivery-button"),
    ButtonWarranty = document.querySelector(".warranty-button"),
    ButtonCredit = document.querySelector(".credit-button"),
    DeliveryInfo = document.querySelector(".delivery-info"),
    WarrantyInfo = document.querySelector(".warranty-info"),
    CreditInfo = document.querySelector(".credit-info");


ButtonDelivery.addEventListener("click", function (evt) {
        evt.preventDefault();
        DeliveryInfo.classList.add(".info-show");
})

ButtonWarranty.addEventListener("click", function (evt) {
        evt.preventDefault();
        WarrantyInfo.classList.add(".info-show");
})

ButtonCredit.addEventListener("click", function (evt) {
        evt.preventDefault();
        CreditInfo.classList.add(".info-show");
})