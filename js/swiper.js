import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
// import 'swiper/css/coverflowEffect';

// init Swiper:
var swiper = new Swiper(".mySwiper", {
  loop: true,
  effect: "coverflow",
  centeredSlides: true,
  spaceBetween: 20,
  slidesPerView: 2,
  coverflowEffect: {
    stretch:-50,
    rotate: 0,
    depth: 500,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});