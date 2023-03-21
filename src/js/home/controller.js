"use strict";

import * as model from "./model";
import * as footer from "./views/footer";
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
