const itemInPopup = (item, modalInner) => {
  let cloneItem = item.cloneNode();

  modalInner.appendChild(cloneItem);
};

export default itemInPopup;
