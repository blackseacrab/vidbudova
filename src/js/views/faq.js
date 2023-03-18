const box = document.querySelector(".faq__box");

export const reveal = function () {
  box.addEventListener("click", function (e) {
    if (e.target.classList.contains("faq__box__item")) {
      e.target.classList.toggle("faq__box__item--active");
      e.target.children[0].children[2].classList.toggle("icon__hidden");
      e.target.children[0].children[1].classList.toggle("icon__hidden");
    } else {
      e.target
        .closest(".faq__box__item")
        .classList.toggle("faq__box__item--active");
      console.log(e.target.closest(".faq__box__item").children[0]);
      e.target
        .closest(".faq__box__item")
        .children[0].children[2].classList.toggle("icon__hidden");
      e.target
        .closest(".faq__box__item")
        .children[0].children[1].classList.toggle("icon__hidden");
    }
  });
};
