"use strict";

import * as model from "./model.js";
import * as footer from "./views/footer.js";
import * as mobileNav from "./views/mobilenav";
import * as popup from "./views/popup";
import * as slider from "./views/slider";
import * as faq from "./views/faq";

const init = function () {
  popup.popupWindowOpenClose();
  slider.slider();
  faq.reveal();
  mobileNav.mobileNav();
  model.smoothScrolling();
  footer.autoChangeYear();
  model.revealSections();
};
init();
