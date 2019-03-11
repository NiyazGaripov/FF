'use strict';

(function () {
  $(document).ready(function() {
    $('.faq__item-link').on('click', function(evt) {
      evt.preventDefault();

      var item = $(this).closest('.faq__item'),
          contentItem = $('.faq__answers'),
          itemPosition = item.index();

      contentItem.eq(itemPosition)
        .add(item)
        .addClass('active')
        .siblings()
        .removeClass('active');
    })
  })
})();
