const adForm = document.querySelector('.ad-form');
const filterAndNoticeFields = document.querySelectorAll('.map__features, select, fieldset');

const deactivateForm = () => {
  adForm.classList.add('ad-form--disabled');
};

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
};

const deactivateFields = (value) => {
  filterAndNoticeFields.forEach((item) => {
    item.disabled = value;
  });
};

deactivateFields(true);
deactivateForm();
activateForm();
