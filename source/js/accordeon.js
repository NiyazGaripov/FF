'use strict';

(function () {
  $(document).ready(function() {
    $('.faq__subtitle').on('click', function(evt) {
      evt.preventDefault();

      var $this = $(this),
          item = $this.closest('.faq__answer'),
          list = $this.closest('.faq__answers'),
          items = list.find('.faq__answer'),
          content = item.find('.faq__content'),
          otherContent = list.find('.faq__content'),
          duration = 300;

      if (!item.hasClass('.active')) {
        items.removeClass('.active');
        item.addClass('.active');

        otherContent.stop(true,true).slideUp(duration);
        content.stop(true,true).slideDown(duration);
      } else {
        content.stop(true,true).slideUp(duration);
        item.stop(true,true).removeClass('.active');
      }

    })
  })
})();
