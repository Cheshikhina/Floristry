import 'svgxuse';
import 'lazysizes';
import './sliders';
import common from './modules/common';
import scroll from './modules/scroll';
import menu from './modules/menu';
import modal from './modules/modal';
import form from './modules/form';

window.addEventListener('DOMContentLoaded', () => {
  common();
  scroll();
  menu('.header__btn');
  modal('[data-modal="open_popup"]', '#popup');
  modal('.trigger', '#popup');
  modal('.page_slider__img');

  if (document.querySelectorAll('form').length) {
    document.querySelectorAll('form').forEach(item => {
      form(item);
    });
  }
});
