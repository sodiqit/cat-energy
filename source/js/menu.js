var button = document.querySelector(".main_menu__button");
var menu = document.querySelector(".main_menu");

menu.classList.remove("main_menu--no-js");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  button.classList.toggle("main_menu__button--active");
  menu.classList.toggle("main_menu--js");
});
