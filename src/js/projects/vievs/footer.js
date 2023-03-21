"use strict";

///////////////////////////////////////////////////////////
// Set current year
export const autoChangeYear = function () {
  const yearEl = document.querySelectorAll(".year");
  const currentYear = new Date().getFullYear();
  // console.log(yearEl);
  yearEl.forEach((year) => {
    // console.log(year);
    year.textContent = currentYear;
  });
  yearEl.textContent = currentYear;
};
