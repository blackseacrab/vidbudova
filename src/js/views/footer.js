"use strict";

///////////////////////////////////////////////////////////
// Set current year
export const autoChangeYear = function () {
  const yearEl = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
};
