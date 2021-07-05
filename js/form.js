const adForm = document.querySelector('.ad-form');
const mapFeatures = document.querySelector('.map__features');
const filterAndNoticeFields = document.querySelectorAll('select, fieldset');
const titleFormOffer = document.querySelector('#title');
const priceFormOffer = document.querySelector('#price');
const roomNumberSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');

const RoomGuestRation = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const toggleFields = (value) => {
  filterAndNoticeFields.forEach((item) => {
    item.disabled = value;
  });
};

const deactivatePage = () => {
  adForm.classList.add('ad-form--disabled');
  mapFeatures.classList.add('ad-form--disabled');
  toggleFields(true);
};

const activatePage = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFeatures.classList.remove('ad-form--disabled');
  toggleFields(false);
};

deactivatePage();
activatePage();

titleFormOffer.addEventListener('input', () => {
  if (titleFormOffer.validity.tooShort) {
    titleFormOffer.setCustomValidity('Заголовок должен состоять минимум из 30 символов');
  } else if (titleFormOffer.validity.tooLong) {
    titleFormOffer.setCustomValidity('Заголовок не должен превышать 100 символов');
  } else if (titleFormOffer.validity.valueMissing) {
    titleFormOffer.setCustomValidity('Обязательное поле');
  } else {
    titleFormOffer.setCustomValidity('');
  }
});

priceFormOffer.addEventListener('input', (evt) => {
  if (evt.target.validity.rangeUnderflow) {
    priceFormOffer.setCustomValidity('Жилье не может стоить меньше указанной стоимости');
  } else if (evt.target.validity.rangeOverflow) {
    priceFormOffer.setCustomValidity('Жилье не может стоить больше 1 000 000 рублей');
  } else if (evt.target.validity.valueMissing) {
    priceFormOffer.setCustomValidity('Обязательное поле');
  } else {
    priceFormOffer.setCustomValidity('');
  }
});

const checkPlaceValidity = () => {
  const roomGuests = RoomGuestRation[roomNumberSelect.value];
  const message = roomGuests.indexOf(+capacitySelect.value) === -1 ? 'Количество гостей больше чем комнат' : '';
  capacitySelect.setCustomValidity(message);
};

roomNumberSelect.addEventListener('change', () => {
  checkPlaceValidity();
});

capacitySelect.addEventListener('change', () => {
  checkPlaceValidity();
});
