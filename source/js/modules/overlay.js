const overlay = () => {
  const body = document.querySelector('body');

  function getScrollbarWidth() {
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    body.removeChild(div);
    return scrollWidth;
  }

  if (body.classList.contains('body_hidden')) {
    body.classList.remove('body_hidden');
    body.style.paddingRight = 0;
  } else {
    body.classList.add('body_hidden');
    body.style.paddingRight = getScrollbarWidth() + 'px';
  }
};

export default overlay;
