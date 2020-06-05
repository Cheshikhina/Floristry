import overlay from './overlay';
const KeyCode = {
  ESC: 27,
};

const modal = (selectorTrigger, selectorModalWrap, selectorModalClose) => {
  const buttons = document.querySelectorAll(selectorTrigger),
    modalWrap = document.querySelector(selectorModalWrap),
    modalBtnClose = document.querySelector(selectorModalClose),
    classModalOpen = selectorModalWrap.substr(1) + '--open';

  function closeModalEsc(evt) {
    if (evt.keyCode === KeyCode.ESC) {
      closeModal();
    }
  }

  function closeModalHandler(evt) {
    if (evt.target.classList.contains('modal')) {
      closeModal();
    }
  }

  function openModal(evt) {
    evt.preventDefault();
    overlay();
    modalWrap.classList.add(classModalOpen);
    modalBtnClose.addEventListener('click', closeModal);
    document.addEventListener('keydown', closeModalEsc);
    document.addEventListener('click', closeModalHandler);
  }

  function closeModal() {
    overlay();
    modalWrap.classList.remove(classModalOpen);
    document.removeEventListener('keydown', closeModalEsc);
    document.removeEventListener('click', closeModalHandler);
  }

  if (buttons.length > 0) {
    buttons.forEach(button => {
      button.addEventListener('click', openModal);
    });
  }
};

export default modal;
