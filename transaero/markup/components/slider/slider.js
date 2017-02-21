import 'slick-carousel';

$(document).ready(function () {
    $('.slider__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.slider__btn_left',
        nextArrow: '.slider__btn_right'
    });
});