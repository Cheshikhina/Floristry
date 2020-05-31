import Swiper from 'swiper';

if (document.querySelector('.main-slider')) {
  const mainSlider = new Swiper('.swiper-container.main-slider', {
    slidesPerView: 1,
    spaceBetween: 8,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 8,
        init: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
        init: true,
        pagination: {
          el: '.pagination',
          clickable: true,
        },
      },
    }
  });

  mainSlider.init();
}

// var mySwiper = new Swiper('.swiper-container', {
//   /* ... */ });

// console.log(1);
