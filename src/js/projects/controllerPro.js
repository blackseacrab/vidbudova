"use strict";

import * as model from "./model";
import * as footer from "./footer";
import * as mobileNav from "./mobilenav";
import * as popup from "./popup";
import * as slider from "./slider";

const init = function () {
  popup.popupWindowOpenClose();
  mobileNav.mobileNav();
  // model.smoothScrolling();
  footer.autoChangeYear();
};
init();
console.log(`My name is Andrii`);
