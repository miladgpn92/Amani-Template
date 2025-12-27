import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// اسلایدر اصلی
const sliderEl = document.querySelector(".swiper");
if (sliderEl) {
  new Swiper(sliderEl, {
    modules: [Navigation, Pagination],
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

// اسلایدر کتگوری
const categorySliderEl = document.querySelector(".category-swiper");
if (categorySliderEl) {
  new Swiper(categorySliderEl, {
    modules: [Pagination, Autoplay],
    loop: true,
    slidesPerView: 4,
    spaceBetween: 16,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 12,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
    pagination: {
      el: categorySliderEl.querySelector(".swiper-pagination"),
      clickable: true,
    },
  });
}
