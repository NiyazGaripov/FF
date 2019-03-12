'use strict';

(function () {
  $(document).ready(function () {

    $('.slider__contol').on('click', function(evt) {
      evt.preventDefault();

      var $this = $(this),
          container = $this.closest('.slider'),
          list = container.find('.slider__list'),
          items = container.find('.slider__item'),
          activeSlide = items.filter('.active'),
          nextSlide = activeSlide.next(),
          prevSlide = activeSlide.prev(),
          firstSlide = items.first(),
          lastSlide = items.last(),
          sliderOffset = container.offset().left,
          reqPos = 0;

      var removeActiveClass = function (reqSlide) {
        reqSlide.addClass('active').siblings().removeClass('active');
      }

      var findReqPos = function (slide) {
        reqPos = slide.offset().left - sliderOffset;
      }

      if ($(this).hasClass('slider__contol--next')) {

        if (nextSlide.length) {
          findReqPos(nextSlide);
          removeActiveClass(nextSlide);
        } else {
          findReqPos(firstSlide);
          removeActiveClass(firstSlide);
        }

      } else {

        if (prevSlide.length) {
          findReqPos(prevSlide);
          removeActiveClass(prevSlide);
        } else {
          findReqPos(lastSlide);
          removeActiveClass(lastSlide);
        }

      }

      list.css('left', '-=' + reqPos + 'px');
    })
  })
})();
