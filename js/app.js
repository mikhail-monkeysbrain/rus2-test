const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 0,
    },
    speed: 3000,
    slidesPerView: 'auto',
    spaceBetween: 10,
});

const swiperReverse = new Swiper('.swiper-reverse', {
    loop: true,
    autoplay: {
        delay: 0,
        reverseDirection: true,
    },
    speed: 3000,
    slidesPerView: 'auto',
    spaceBetween: 10,
});

