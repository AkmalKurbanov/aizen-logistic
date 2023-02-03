$('.faq__item-title').on('click', function () {
  $('.faq__item-title').not(this).parent().removeClass('open');
  $(this).parent().toggleClass('open');
});