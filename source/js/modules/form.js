import overlay from './overlay';

const form = (formNode, closeModal = false, closeModalContent = false) => {
  const inputs = formNode.querySelectorAll('input'),
    successMessages = ['Форма отправлена!', 'Мы свяжемся с вами в ближайшее время'],
    URL = 'http://httpbin.org/post',
    MOBILE_WIDTH = 768,
    KeyCode = {
      ESC: 27,
    };

  const isInputPhone = (input) => {
    return input.getAttribute('name') === 'input_phone' ? true : false;
  };

  const collapsesPhoneValue = () => {
    inputs.forEach(input => {
      if (isInputPhone(input)) {
        input.value = input.value.split('').filter(function (item) {
          return item.replace(/\D/, '');
        }).join('');
      }
    });
  };

  const removePlaceholder = (evt = false) => {
    if (evt) {
      let placeholder = evt.target.parentNode.querySelector('[for = ' + evt.target.getAttribute('id') + ']+.form__error');
      if (placeholder) {
        return placeholder.remove();
      }
    } else {
      let placeholders = document.querySelectorAll('.form__error');
      for (let placeholder of placeholders) {
        placeholder.remove();
      }
    }
  };

  const validateInput = function (input) {
    const lengthPhone = {
      current: 11,
      full: 18
    };
    if (input.value.trim() === '') {
      return 'Заполните данное поле';
    } else if (isInputPhone(input) && ((input.value.length < lengthPhone.full && input.value.substring(0, 1) === '+') || (input.value.length < lengthPhone.current && input.value.substring(0, 1) === '7'))) {
      return 'Введите корректный номер телефона';
    }
    return false;
  };

  function checkForm() {
    inputs.forEach(input => {
      let span = document.createElement('span');
      span.classList.add('form__error');
      span.textContent = validateInput(input);
      if (span.textContent !== 'false' && !document.querySelector('[for = ' + input.id + ']+.form__error')) {
        input.insertAdjacentElement('beforebegin', span);
      }
      input.addEventListener('input', removePlaceholder);
    });

    return formNode.querySelector('.form__error') ? true : false;
  }

  function removeSuccessMessageEsc(evt) {
    if (evt.keyCode === KeyCode.ESC) {
      removeSuccessMessage();
    }
  }

  function removeSuccessMessageHandler(evt) {
    if (evt.target.classList.contains('modal')) {
      removeSuccessMessage();
    }
  }

  const removeSuccessMessage = () => {
    const successWrapper = document.querySelector('.modal');
    const successBlock = document.querySelector('.modal__content');
    successWrapper.classList.remove('modal--open');
    successBlock.classList.remove('modal__content--open');

    setTimeout(function () {
      document.querySelector('body').removeChild(successWrapper);
      overlay.mainFunction();
      document.removeEventListener('keydown', removeSuccessMessageEsc);
      document.removeEventListener('click', removeSuccessMessageHandler);
    }, 300);
  };

  const createSuccessMessage = () => {
    if (closeModalContent) {
      closeModalContent();
    } else {
      const successWrapper = document.createElement('div');
      successWrapper.classList.add('modal');
      document.querySelector('body').appendChild(successWrapper);
      setTimeout(function () {
        successWrapper.classList.add('modal--open');
        overlay.mainFunction();
      }, 1);
    }
    const successBlock = document.createElement('div'),
      successButton = document.createElement('button');

    successBlock.classList.add('modal__content', 'modal__content--success');
    successButton.classList.add('modal__btn');

    document.querySelector('.modal').appendChild(successBlock);

    successMessages.forEach(function (item) {
      let message = document.createElement('p');
      message.textContent = item;

      successBlock.appendChild(message);
    });

    successBlock.appendChild(successButton);
    successButton.type = 'button';
    successButton.textContent = 'Ок';

    if (closeModal) {
      successButton.addEventListener('click', closeModal);
    } else {
      successButton.addEventListener('click', removeSuccessMessage);
      document.addEventListener('keydown', removeSuccessMessageEsc);
      document.addEventListener('click', removeSuccessMessageHandler);
    }

    setTimeout(function () {
      successBlock.classList.add('modal__content--open');
    }, 1);
  };

  const createErrorMessage = (errorText) => {
    if (formNode.querySelector('.form__error_message')) {
      return;
    }
    let errorMessage = document.createElement('p');
    errorMessage.classList.add('form__error_message');
    errorMessage.textContent = errorText;

    formNode.appendChild(errorMessage);

    setTimeout(function () {
      formNode.querySelector('.form__error_message').remove();
    }, 4200);
  };

  const submitForm = (evt) => {
    evt.preventDefault();
    if (checkForm()) {
      return;
    }

    collapsesPhoneValue();

    let data = new FormData(formNode);
    var xhr = new XMLHttpRequest();
    xhr.onloadstart = function (eventt) {
      xhr.responseType = "json";
    }
    xhr.open('POST', URL);
    xhr.send(data);

    xhr.addEventListener('load', function (e) {
      var target = e.target;

      try {
        if (target.status === 200) {
          formNode.reset();
          createSuccessMessage();
        } else if (target.response.message) {
          createErrorMessage(target.response.message);
        } else {
          createErrorMessage('Внутренняя ошибка сервера');
        }

      } catch (err) {
        createErrorMessage(err);
      }
    });

    xhr.addEventListener('error', function () {
      createErrorMessage('Произошла ошибка соединения');
    });
  };

  removePlaceholder();
  formNode.addEventListener('submit', submitForm);
  inputs.forEach(input => {
    if (window.matchMedia('(max-width: ' + MOBILE_WIDTH + 'px)').matches) {
      input.addEventListener('touchstart', function (evt) {
        evt.target.style.fontSize = '18px';
      });
      input.addEventListener('touchcancel', function (evt) {
        evt.target.style.fontSize = '';
      });
    }
  });
};

export default form;
