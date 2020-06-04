import 'svgxuse';
import 'lazysizes';
import './sliders';
import common from './modules/common';
import scroll from './modules/scroll';
import menu from './modules/menu';
import modal from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
  common();
  scroll();
  menu('.header__btn');
  modal('.trigger', '.modal', '.modal__close');
});
