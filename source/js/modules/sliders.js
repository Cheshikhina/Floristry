import Swiper from 'swiper';

const sliders = () => {
  if (document.querySelector('.swiper-container')) {
    const mainSlider = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
};

// var mySwiper = new Swiper('.swiper-container', {
//   /* ... */ });

// console.log(1);

export default sliders;
