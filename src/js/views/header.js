"use strict";

const header = document.querySelector(".header");
const sectionAbout = document.querySelector(".about__images");
const headerHeight = header.getBoundingClientRect().height;
///////////////////////////////////////////////////////////
// Sticky navigation
export const stickyNav = function () {
  const stickyNavFunction = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) document.body.classList.add("sticky");
    else document.body.classList.remove("sticky");
  };

  const headerObserver = new IntersectionObserver(stickyNavFunction, {
    root: null,
    threshold: 1,
    // rootMargin: `0px`,
    rootMargin: `-${headerHeight}px`,
  });
  headerObserver.observe(sectionAbout);
};

// Menu fade animation

export const fadeAnimation = function () {
  const handleHover = function (e) {
    if (e.target.classList.contains("header__nav--link")) {
      const link = e.target;
      const siblings = link
        .closest(".header")
        .querySelectorAll(".header__nav--link");

      siblings.forEach((el) => {
        if (el !== link) el.style.opacity = this;
      });
    }
  };

  // Passing "argument" into handler
  header.addEventListener("mouseover", handleHover.bind(0.5));
  header.addEventListener("mouseout", handleHover.bind(1));
};
