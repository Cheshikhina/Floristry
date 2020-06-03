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

  noFocus();
  addClassForLazyload();
};

export default common;
