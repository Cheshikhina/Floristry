import Swiper from 'swiper';
import itemInPopup from './item-in-popup';

if (document.querySelector('.main_slider')) {
  const mainSlider = new Swiper('.main_slider', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 40,
    pagination: {
      el: '.main_slider__pagination',
      bulletClass: 'main_slider__bullet',
      bulletActiveClass: 'main_slider__bullet--active',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 8,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
      },
      1025: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    }
  });
}

if (document.querySelector('.page_slider')) {
  const pageSlider = new Swiper('.page_slider__wrap', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.page_slider__btn--next',
      prevEl: '.page_slider__btn--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 3.5,
        spaceBetween: 15,
      },
      768: {
        spaceBetween: 23,
      },
    }
  });
}

const target = document.querySelector('body');

const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    const modalSlider = new Swiper('.modal__slider>div', {
      slidesPerView: 1,
      spaceBetween: 10,
      initialSlide: itemInPopup.activeEl
    });
  });
});

const config = {
  attributes: true,
  childList: true,
  characterData: true
};

observer.observe(target, config);
