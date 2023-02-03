$('.hamburger').on('click', function () {
  $('body').toggleClass('no-scroll')
  $(this).toggleClass('open');
  $('.menu').toggleClass('open');
});