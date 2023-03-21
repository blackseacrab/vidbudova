"use strict";

export const mobileNav = function () {
  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const headerEl = document.querySelector(".header");
  const mobileNavLinkEl = document.querySelectorAll(".mobile__nav--link");

  btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
    console.log(`class added`);
  });
  mobileNavLinkEl.forEach((link) =>
    link.addEventListener("click", function () {
      headerEl.classList.toggle("nav-open");
    })
  );
};
