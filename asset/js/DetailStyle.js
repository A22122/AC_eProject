document.addEventListener("DOMContentLoaded", function() {
    var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  });
