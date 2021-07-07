const adForm = document.querySelector('.ad-form');
const titleFormOffer = adForm.querySelector('#title');
const priceFormOffer = adForm.querySelector('#price');
const roomNumberSelect = adForm.querySelector('#room_number');
const capacitySelect = adForm.querySelector('#capacity');

const MIN_TITLE = 30;
const MAX_TITLE = 100;

const roomGuestRation = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const onTitleChange = () => {
  if (titleFormOffer.validity.tooShort) {
    titleFormOffer.setCustomValidity(`Заголовок должен состоять минимум из ${MIN_TITLE} символов`);
  } else if (titleFormOffer.validity.tooLong) {
    titleFormOffer.setCustomValidity(`Заголовок не должен превышать ${MAX_TITLE} символов`);
  } else if (titleFormOffer.validity.valueMissing) {
    titleFormOffer.setCustomValidity('Обязательное поле');
  } else {
    titleFormOffer.setCustomValidity('');
  }
  titleFormOffer.reportValidity();
};

const onPriceChange = (evt) => {
  if (evt.target.validity.rangeUnderflow) {
    evt.target.setCustomValidity(`Жилье не может стоить меньше ${evt.target.min} рублей`);
  } else if (evt.target.validity.rangeOverflow) {
    evt.target.setCustomValidity(`Жилье не может стоить больше ${evt.target.max} рублей`);
  } else if (evt.target.validity.valueMissing) {
    evt.target.setCustomValidity('Обязательное поле');
  } else {
    evt.target.setCustomValidity('');
  }
  evt.target.reportValidity();
};

const checkPlaceValidity = () => {
  const roomGuests = roomGuestRation[roomNumberSelect.value];
  const message = roomGuests.indexOf(+capacitySelect.value) === -1 ? 'Количество гостей больше чем комнат' : '';
  capacitySelect.setCustomValidity(message);
};

const setFormListeners = () => {
  titleFormOffer.addEventListener('change', onTitleChange);
  priceFormOffer.addEventListener('change', onPriceChange);
  roomNumberSelect.addEventListener('change', () => checkPlaceValidity());
  capacitySelect.addEventListener('change', () => checkPlaceValidity());
};

export { setFormListeners };
