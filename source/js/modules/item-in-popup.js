let itemInPopup = {};
itemInPopup.activeEl = 0;
itemInPopup.mainFunction = (item, modalInner) => {
  let cloneItem;
  if (item.currentTarget.classList.contains('page_slider')) {
    cloneItem = item.currentTarget.cloneNode(true);
    cloneItem.removeAttribute('class');
    cloneItem.classList.add('modal__slider');

    cloneItem.querySelectorAll('.page_slider__btn').forEach(btn => {
      btn.remove();
    });
    cloneItem.querySelectorAll('img').forEach(img => {
      img.removeAttribute('class');
    });

    let list = item.currentTarget.querySelectorAll('li');
    let currentImg = item.target.parentNode.parentNode.parentNode;
    for (let i = 0; i < list.length; i++) {
      cloneItem.querySelectorAll('li')[i].classList.remove('swiper-slide-active');
      if (list[i] === currentImg) {
        itemInPopup.activeEl = i;
      }
    }

  } else {
    cloneItem = item.target.cloneNode();
    cloneItem.classList.add('modal__item');
  }
  modalInner.appendChild(cloneItem);
  return itemInPopup.activeEl;
};

export default itemInPopup;
