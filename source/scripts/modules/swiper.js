import Swiper from 'swiper';

let swiper = document.querySelector('.intro-swiper');

swiper ?
new Swiper(swiper, {
    slidesPerView: 1,

    pagination: {
        el: ".intro-swiper-pagination",
        dynamicBullets: true,
    },
}) : null