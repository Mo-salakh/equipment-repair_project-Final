import '../scss/style.scss';
import showTextElements from './showText-Elements.mjs';
showTextElements();
import showElements from './showGrid-Elements.mjs';
showElements()
import showBurger from './showBurger-menu.mjs'; 
showBurger();
import showInfolNav from './showInfoNav.mjs';
showInfolNav();
import showCallMenu from './showCallNav.mjs';
showCallMenu();
import swyperBreak from './swyperBreak.mjs';
swyperBreak();
console.log('Works!')
import showBlocks from './showBlocks.mjs';
showBlocks();




const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    780: {
      toggle: false,
      loop: false,
      spaceBetween: "auto",
      slidesPerView: "auto",
      centeredSlides: false,
    },
  },
});
