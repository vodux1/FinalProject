const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
