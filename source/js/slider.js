var sliderBtnBefore = document.querySelector(".before");
var sliderBtnAfter = document.querySelector(".after");
var pictureBefore = document.querySelector(".example__before");
var pictureAfter = document.querySelector(".example__after");
var slider = document.querySelector(".inner-check");

slider.classList.remove("inner-check--js");

sliderBtnAfter.addEventListener("click", function (evt) {
  evt.preventDefault();
  slider.classList.add("inner-check--js");
  pictureAfter.classList.add("example__after--js");
  pictureBefore.classList.add("example__before--js");
});

sliderBtnBefore.addEventListener("click", function (evt) {
  evt.preventDefault();
  slider.classList.remove("inner-check--js");
  pictureBefore.classList.remove("example__before--js");
  pictureAfter.classList.remove("example__after--js");
});

