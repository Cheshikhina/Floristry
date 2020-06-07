const overlay = {};

overlay.scrollY = 0;
overlay.mainFunction = () => {
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
    window.scrollTo(0, parseInt(overlay.scrollY || '0', 10));
    body.style.top = 0;
  } else {
    overlay.scrollY = window.pageYOffset;
    body.classList.add('body_hidden');
    body.style.paddingRight = getScrollbarWidth() + 'px';
    body.style.top = '-' + overlay.scrollY + 'px';
  }
  return overlay.scrollY;
};

export default overlay;
