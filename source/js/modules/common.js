import IMask from 'imask';

const common = () => {
  const noFocus = () => {
    document.addEventListener('mouseup', function (evt) {
      if (evt.target.tagName !== 'A' && evt.target.tagName !== 'BUTTON') {
        return;
      }
      evt.target.blur();
    });
  };

  const addClassForLazyload = () => {
    const images = document.querySelectorAll('img');
    images.forEach(image => {
      image.classList.add('lazyload');
    });
  };

  const addPhoneMask = () => {
    if (document.querySelectorAll('input[name="input_phone"]').length > 0) {
      document.querySelectorAll('input[name="input_phone"]').forEach(input => {
        let phoneMask = IMask(
          input, {
            mask: '+{7} (000) 000-00-00'
          });
      });
    }
  };

  noFocus();
  addClassForLazyload();
  addPhoneMask();
};

export default common;
