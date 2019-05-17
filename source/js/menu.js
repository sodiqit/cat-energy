var button = document.querySelector(".main_menu__button");
var menu = document.querySelector(".main_menu");
var link = document.querySelector(".main_menu__link");

menu.classList.remove("main_menu--no-js");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  button.classList.toggle("main_menu__button--active");
  menu.classList.toggle("main_menu--js");
});

link.addEventListener("click", function (evt) {
  if (link.classList.contains("main_menu__link--logo")) {
    link.classList.remove("main_menu__link--active");
  } else {
    link.classList.toggle("main_menu__link--active");
  }
});
