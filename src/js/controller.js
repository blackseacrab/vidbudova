"use strict";

import * as model from "./model.js";
import * as footer from "./views/footer.js";
import * as header from "./views/header";
import * as mobileNav from "./views/mobilenav";
import * as popup from "./views/popup";
import * as slider from "./views/slider";
import * as faq from "./views/faq";

const init = function () {
  //   model.lazyLoadImg();
  //   model.smoothScrolling();
  //   // header.stickyNav();
  //   header.fadeAnimation();

  footer.autoChangeYear();
  //   model.revealSections();
  popup.popupWindowOpenClose();
  slider.slider();
  faq.reveal();
  mobileNav.mobileNav();
};
init();
