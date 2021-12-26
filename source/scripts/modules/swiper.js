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

let popularSlider = document.querySelector('.popular-swiper');

popularSlider ?
new Swiper(popularSlider, {
    slidesPerView: '4',
}) : null

let historySlider = document.querySelector('.history-swiper');

historySlider ?
new Swiper(historySlider, {
    slidesPerView: '4',
}) : null