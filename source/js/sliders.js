import Swiper from 'swiper';

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
        spaceBetween: 8,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    }
  });
}
