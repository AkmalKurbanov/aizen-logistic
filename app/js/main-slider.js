$(function () {
  let currentPosition = 0;
  let photo = $('#slider .main-slider__item');
  let photoNums = photo.length; 

  let speed = 600;
  let timeout = 5000; 
  
  $('#slider .main-slider__item').eq(0).addClass('show');

  function move() {

    let nextPhoto = (currentPosition + 1) % photoNums;
    photo.eq(currentPosition).removeClass('show');
    photo.eq(nextPhoto).addClass('show');
    currentPosition = nextPhoto;
  }
  setInterval(move, timeout);
})
