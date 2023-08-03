const headerNav = document.querySelector(".header-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  headerNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("Aria-expanded", false)
    : navToggle.setAttribute("Aria-expanded", true);
  headerNav.toggleAttribute("data-visible");
});

/* swiper */
// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 5,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + "</span>";
  },

  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    700: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
  button.addEventListener("click", () => {
    window.location.href = "pages/error.html";
  });
}
