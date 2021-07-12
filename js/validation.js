import { HOUSING_TYPES } from './data.js';

const adForm = document.querySelector('.ad-form');
const titleFormOffer = adForm.querySelector('#title');
const priceFormOffer = adForm.querySelector('#price');
const roomNumberSelect = adForm.querySelector('#room_number');
const capacitySelect = adForm.querySelector('#capacity');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const propertyType = adForm.querySelector('#type');


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
  const message = !roomGuests.includes(+capacitySelect.value) ? 'Количество гостей больше чем комнат' : '';
  capacitySelect.setCustomValidity(message);
};

const onTimeInChange = (evt) => { timeOut.value = evt.target.value; };

const onTimeOutChange = (evt) => { timeIn.value = evt.target.value; };

const priceChangeHandler = (evt) => {
  const minPrice = HOUSING_TYPES[evt.target.value].minPrice;
  priceFormOffer.min = minPrice;
  priceFormOffer.placeholder = minPrice;
};

const setFormListeners = () => {
  titleFormOffer.addEventListener('change', onTitleChange);
  priceFormOffer.addEventListener('change', onPriceChange);
  propertyType.addEventListener('change', priceChangeHandler);
  roomNumberSelect.addEventListener('change', () => checkPlaceValidity());
  capacitySelect.addEventListener('change', () => checkPlaceValidity());
  timeIn.addEventListener('change', onTimeInChange);
  timeOut.addEventListener('change', onTimeOutChange);
};

export { setFormListeners };
