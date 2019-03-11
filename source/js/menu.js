'use strict';

(function () {
  var compositionLink = document.querySelectorAll('.menu__link');
  var composition = document.querySelector('.composition');
  var compositionClose = document.querySelectorAll('.composition__close');

  for (var i = 0; i < compositionLink.length; i++) {
    compositionLink[i].addEventListener('click', function(evt) {
      evt.preventDefault();

      composition.classList.add("composition--active");
    });
  }

  for (var j = 0; j < compositionClose.length; j++) {
    compositionClose[j].addEventListener("click", function(evt) {
      evt.preventDefault();

      composition.classList.remove("composition--active");
    });
  }
})();
