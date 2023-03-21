"use strict";

import * as model from "./model";
import * as footer from "./vievs/footer";
import * as mobileNav from "./vievs/mobilenav";
import * as popup from "./vievs/popup";
import * as slider from "./vievs/slider";

const init = function () {
  popup.popupWindowOpenClose();
  mobileNav.mobileNav();
  model.smoothScrolling();
  footer.autoChangeYear();
};
init();
console.log(`My name is Andrii`);
