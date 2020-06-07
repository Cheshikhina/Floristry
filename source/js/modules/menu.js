import overlay from './overlay';

const menu = (selectorBtn) => {
  const buttonMenu = document.querySelector(selectorBtn);

  if (buttonMenu) {
    buttonMenu.addEventListener('click', function () {
      buttonMenu.classList.toggle(selectorBtn.substr(1) + '--open');
      overlay.mainFunction();
    });
  }
};

export default menu;
