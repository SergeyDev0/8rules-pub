import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.actions__wrapper-slider.desktop .swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 16,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.actions__wrapper-slider.desktop .swiper-pagination',
  },
});

const swiperMobile = new Swiper('.actions__wrapper-slider.mobile .swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 16,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.actions__wrapper-slider.mobile .swiper-pagination',
  },
});