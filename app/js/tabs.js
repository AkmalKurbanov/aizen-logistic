$(document).ready(function () {

  (function ($) {
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

    $('.tab ul.tabs li a').click(function (g) {
      var tab = $(this).closest('.tab'),
        index = $(this).closest('li').index();

      tab.find('ul.tabs > li').removeClass('current');
      $(this).closest('li').addClass('current');

      tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
      tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

      g.preventDefault();
    });
  })(jQuery);

  (function ($) {
    $('.tab_select ul.tabs_select').addClass('active').find('> li:eq(0)').addClass('current');

    $('.tab_select ul.tabs_select li a').click(function (g) {
      var tab = $(this).closest('.tab_select'),
        index = $(this).closest('li').index();

      tab.find('ul.tabs_select > li').removeClass('current');
      $(this).closest('li').addClass('current');

      tab.find('.tab_content_select').find('div.tabs_item_select').not('div.tabs_item_select:eq(' + index + ')').slideUp();
      tab.find('.tab_content_select').find('div.tabs_item_select:eq(' + index + ')').slideDown();

      g.preventDefault();
    });
  })(jQuery);

});