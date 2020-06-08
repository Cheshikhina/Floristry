const itemInPopup = (item, modalInner) => {
  let cloneItem = item.cloneNode();
  cloneItem.classList.add('modal__item');
  modalInner.appendChild(cloneItem);
};

export default itemInPopup;
