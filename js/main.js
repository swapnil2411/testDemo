// Slider 
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper("#customerSlider", {
    spaceBetween: 30,
    centeredSlides: true,
    dots: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Mobile Nav
$(function () {
    $('.innerHeaderLogo svg').on('click', function () {
        $(".mobileNav").addClass("mobactive");
        $("body").css("overflow", "hidden");
    })
    $('.mobileNav .closebtn').on('click', function () {
        $(".mobileNav").removeClass("mobactive");
        $("body").css("overflow", "unset");
    })
})
