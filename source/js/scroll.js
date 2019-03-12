'use strict';

(function () {
  $.fn.scrollToMe = function (time) {
    var $bodyElem, elemOffset;

    elemOffset = $(this).offset();
    $bodyElem = $('html, body');

    if ($bodyElem.is(':animated')) {
        return;
    }

    $bodyElem.animate({
        scrollTop: elemOffset.top
    }, time !== null ? time : {
        time: 'fast'
    });
  };

  var $menuLink = $('.page__link-menu'),
      $tariffLink = $('.page__link-tariff'),
      $faqLink = $('.page__link-faq'),
      $nav = $('.main-nav');

  var closeNav = function() {

    if ($nav.hasClass('main-nav--opened')) {
      $nav.removeClass('main-nav--opened');
      $nav.addClass('main-nav--closed');
    }
  }

  $menuLink.on('click', function () {
    $('.menu').scrollToMe(1000);

    closeNav();
  });

  $tariffLink.on('click', function () {
    $('.tariff').scrollToMe(1000);

    closeNav();
  });

  $faqLink.on('click', function () {
    $('.faq').scrollToMe(1000);

    closeNav();
  });
})();
