import overlay from './overlay';
const modal = (selectorTrigger, selectorModalWrap, selectorModalClose) => {
  const buttons = document.querySelectorAll(selectorTrigger),
    modalWrap = document.querySelector(selectorModalWrap),
    modalBtnClose = document.querySelector(selectorModalClose),
    classModalOpen = selectorModalWrap.substr(1) + '--open',
    TIMEOUT_HIDE_POPUP = 750; // ms


  function openModal(evt) {
    evt.preventDefault();
    overlay();
    modalWrap.classList.add(classModalOpen);
    modalBtnClose.addEventListener('click', closeModal);
  }

  function closeModal(evt) {
    evt.preventDefault();
    setTimeout(function () {
      overlay();
      modalWrap.classList.remove(classModalOpen);
    }, TIMEOUT_HIDE_POPUP);
  }


  if (buttons.length > 0) {
    buttons.forEach(button => {
      button.addEventListener('click', openModal);
    });
  }
};

export default modal;
