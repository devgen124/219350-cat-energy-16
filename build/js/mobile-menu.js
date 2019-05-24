var burger = document.querySelector(".burger");
var nav = document.querySelector(".page-nav");

burger.classList.remove("burger--no-js");
nav.classList.remove("page-nav--no-js");
burger.addEventListener("click", function() {
  if (burger.classList.contains("burger--open")) {
    burger.classList.remove("burger--open");
    burger.classList.add("burger--close");
    nav.classList.remove("page-nav--closed");
    nav.classList.add("page-nav--opened");
  } else {
    burger.classList.remove("burger--close");
    burger.classList.add("burger--open");
    nav.classList.remove("page-nav--opened");
    nav.classList.add("page-nav--closed");
  };
});
