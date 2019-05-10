var burger = document.querySelector(".burger");
var nav = document.querySelector(".page-nav");

burger.classList.remove("burger--no-js");
burger.classList.add("burger--open");
nav.classList.remove("page-nav--no-js");
burger.addEventListener("click", function() {
  burger.classList.remove("burger--open");
  burger.classList.add("burger--close");
}
