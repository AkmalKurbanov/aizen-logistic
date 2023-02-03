$('form input').on('keyup', function () {
  console.log($(this).val());
  if ($(this).val() != '') {
    $(this).parent().addClass('not-empty')
  } else {
    $(this).parent().removeClass('not-empty')
  }
});


$('.select').on('click', function () {
  $(this).addClass('open')
  $(this).find('.label').first().addClass('active')
});


$('.select .select__list-item').on('click', function () {
  var title = $(this).find('h2').data('title');
  var size = $(this).find('span').data('size');
  $(this).parents('.select').find('.select__selected').text(title + ', ' + size)
  $('.select .select__list-item').not(this).removeClass('selected');
  $(this).addClass('selected');

  (function () {
    var cut = $('.select__selected');
    for (var i = 0; i < cut.length; i++) {
      cut[i].innerText = cut[i].innerText.slice(0, 29) + '...';
    }
  })();

  (function () {
    var cut = $('.calculation .select__selected');
    for (var i = 0; i < cut.length; i++) {
      cut[i].innerText = cut[i].innerText.slice(0, 20) + '...';
    }
  })();

});


jQuery(function ($) {
  $(document).mouseup(function (e) {
    var div = $(".select__dropdown");
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      div.parents('.select').removeClass('open');
      if ($('.select__selected').html().trim() === '') {
        $('.select .label').removeClass('active')
      }
    }
  });
});


