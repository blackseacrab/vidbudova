"use strict";

///////////////////////////////////////////////////////////
// Smooth scrolling animation

export const smoothScrolling = function () {
  const allLinks = document.querySelectorAll("a:link");

  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const href = link.getAttribute("href");
      // console.log(href);

      // Scroll back to top
      if (href === "#") {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      // Scroll to other links
      if (href !== "#" && href.startsWith("#")) {
        e.preventDefault();
        const sectionEl = document.querySelector(href);
        // console.log(sectionEl);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
};

// Reveal sections
export const revealSections = function () {
  const allSections = document.querySelectorAll(".section");
  const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.05,
  });

  allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
  });
};
