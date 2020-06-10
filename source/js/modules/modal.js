import IMask from 'imask';
import overlay from './overlay';
import form from './form';
import itemInPopup from './item-in-popup';

const modal = (selectorTrigger, idTemplate = false) => {
  let modalWrap, modalInner, modalBtnClose, modalForm;
  const KeyCode = {
      ESC: 27,
    },
    Timeout = {
      now: 1,
      quickly: 300,
      long: 600,
    },
    buttons = document.querySelectorAll(selectorTrigger),
    body = document.querySelector('body');

  function createElement(tagEl, classEl, parentEl) {
    let el = document.createElement(tagEl);
    el.classList.add(classEl);
    parentEl.appendChild(el);
    return el;
  }

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
    evt.target.classList.contains('preamble__btn') ? overlay.mainFunction(true) : overlay.mainFunction();

    if (idTemplate) {
      let similarPopup = document.querySelector(idTemplate)
        .content
        .querySelector('.modal');
      let popup = similarPopup.cloneNode(true);
      body.appendChild(popup);

      modalWrap = document.querySelector('.modal');
      modalInner = document.querySelector('.modal__content');
      modalBtnClose = modalWrap.querySelector('.modal__close');
      modalForm = modalWrap.querySelector('form');
    } else {
      modalWrap = createElement('div', 'modal', body);
      modalInner = createElement('div', 'modal__content', modalWrap);
      modalBtnClose = createElement('button', 'modal__close', modalInner);
      modalBtnClose.type = 'button';
      itemInPopup(evt.target, modalInner);
    }

    modalWrap.style.top = overlay.scrollY + 'px';
    setTimeout(function () {
      modalWrap.classList.add('modal--open');
      modalInner.classList.add('modal__content--open');
    }, Timeout.now);

    modalBtnClose.addEventListener('click', closeModal);
    document.addEventListener('keydown', closeModalEsc);
    document.addEventListener('click', closeModalHandler);

    if (modalForm) {
      form(modalForm, closeModal, closeModalContent);

      if (modalForm.querySelectorAll('input[name="input_phone"]').length > 0) {
        document.querySelectorAll('input[name="input_phone"]').forEach(input => {
          let phoneMask = IMask(
            input, {
              mask: '+{7} (000) 000-00-00'
            });
        });
      }
    }
  }

  function closeModal() {
    modalWrap = document.querySelector('.modal');
    modalInner = document.querySelector('.modal__content');
    modalWrap.classList.remove('modal--open');
    modalInner.classList.remove('modal__content--open');

    setTimeout(function () {
      body.removeChild(modalWrap);
      overlay.mainFunction();
      document.removeEventListener('keydown', closeModalEsc);
      document.removeEventListener('click', closeModalHandler);
    }, Timeout.quickly);
  }

  function closeModalContent() {
    modalWrap = document.querySelector('.modal');
    modalInner = document.querySelector('.modal__content');
    modalInner.classList.remove('modal__content--open');

    setTimeout(function () {
      modalWrap.removeChild(modalInner);
    }, Timeout.long);
  }

  if (buttons.length > 0) {
    buttons.forEach(button => {
      button.addEventListener('click', openModal);
    });
  }
};

export default modal;
