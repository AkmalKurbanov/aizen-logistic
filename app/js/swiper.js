import Swiper from 'swiper/bundle';

new Swiper(".partners-js", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    "0": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "375": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    "376": {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    "576": {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    "768": {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    "992": {
      slidesPerView: 7,
      spaceBetween: 10,
    },
    "1200": {
      slidesPerView: 7,
      spaceBetween: 40,
    }
  },
});

new Swiper(".cargo .partners-js", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    "0": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "375": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    "576": {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    "1200": {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  }
});