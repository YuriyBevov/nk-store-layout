import Swiper from 'swiper';

let introSwiper = document.querySelector('.intro-swiper');

introSwiper ?
new Swiper(introSwiper, {
    slidesPerView: 1,

    pagination: {
        el: ".intro-swiper-pagination",
        dynamicBullets: true,
    },
}) : null


let reviewSwiper = document.querySelector('.reviews-swiper');

reviewSwiper ?
new Swiper(reviewSwiper, {
    slidesPerView: '4',

    pagination: {
        el: ".review-swiper-pagination",
        dynamicBullets: true,
    },
}) : null