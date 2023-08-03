const headerNav = document.querySelector(".header-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  headerNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("Aria-expanded", false)
    : navToggle.setAttribute("Aria-expanded", true);
  headerNav.toggleAttribute("data-visible");
});

// init Swiper:
const swiper = document.querySelector(".swiper");
new Swiper(swiper, {
  slidesPerView: 1,
  spaceBetween: 5,

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
