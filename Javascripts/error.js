const pricing = document.querySelector(".price");
const home = document.querySelector(".home");
console.log(pricing, home);

pricing.addEventListener("click", () => {
  window.location.href = "pricing.html";
});

home.addEventListener("click", () => {
  window.location.href = "../index.html";
});
