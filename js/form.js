const adForm = document.querySelector('.ad-form');
const mapFeatures = document.querySelector('.map__features');
const filterAndNoticeFields = document.querySelectorAll('select, fieldset');

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
