"use strict";

export const popupWindowOpenClose = function () {
  const popup = document.querySelector(".popup");
  const overlay = document.querySelector(".overlay");
  const btnClosePopup = document.querySelector(".popup__close");
  const btnOpenPopup = document.querySelectorAll(".btn-popup");

  //open popup
  const openPopup = function (e) {
    e.preventDefault();
    popup.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  //close popup
  const closePopup = function () {
    popup.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  //click to open popup

  btnOpenPopup.forEach((btn) => btn.addEventListener("click", openPopup));
  //click to close popup
  btnClosePopup.addEventListener("click", closePopup);
  overlay.addEventListener("click", closePopup);
  //key to close popup
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !popup.classList.contains("hidden")) {
      closePopup();
    }
  });
};
