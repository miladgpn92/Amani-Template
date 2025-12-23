import Swiper from "swiper";
import "swiper/css";

const sliderEl = document.querySelector(".swiper");
if (sliderEl) {
  new Swiper(sliderEl, {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
