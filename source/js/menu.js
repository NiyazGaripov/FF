'use strict';

(function () {
  $(document).ready(function() {

    var $compositionLink = $('.menu__link'),
        $composition = $('.composition'),
        $compositionClose = $('.composition__close');

    $compositionLink.on('click', function(evt) {
      evt.preventDefault();

      $composition.addClass("composition--active");
    })

    $compositionClose .on('click', function(evt) {
      evt.preventDefault();

      $composition.removeClass("composition--active");
    })

  })
  // var compositionLink = document.querySelectorAll('.menu__link');
  // var composition = document.querySelector('.composition');
  // var compositionClose = document.querySelectorAll('.composition__close');

  // for (var i = 0; i < compositionLink.length; i++) {
  //   compositionLink[i].addEventListener('click', function(evt) {
  //     evt.preventDefault();

  //     composition.classList.add("composition--active");
  //   });
  // }

  // for (var j = 0; j < compositionClose.length; j++) {
  //   compositionClose[j].addEventListener("click", function(evt) {
  //     evt.preventDefault();

  //     composition.classList.remove("composition--active");
  //   });
  // }
})();
