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

// Lazy loading images

//lazy-load images in galery
export let lazyLoadImg = function () {
  const gallery = document.querySelector("#gallery");

  const loadImgGallery = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    const images = entry.target.querySelectorAll(".card__img");
    images.forEach((img) => {
      img.src = img.dataset.src;
      img.classList.remove("lazy-img");
    });

    observer.unobserve(entry.target);
  };

  const galleryObserver = new IntersectionObserver(loadImgGallery, {
    root: null,
    threshold: 0.1,
    rootMargin: "200px",
  });

  galleryObserver.observe(gallery);

  const imgTargets = document.querySelectorAll("img[data-src]");
  const loadImg = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", function () {
      entry.target.classList.remove("lazy-img");
    });

    observer.unobserve(entry.target);
  };

  const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0.1,
    rootMargin: "200px",
  });

  imgTargets.forEach((img) => imgObserver.observe(img));
};
