const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const filterAndNoticeFields = document.querySelectorAll('select, fieldset');


const toggleFields = (value) => {
  filterAndNoticeFields.forEach((item) => {
    item.disabled = value;
  });
};

const deactivatePage = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('ad-form--disabled');
  toggleFields(true);
};

const activatePage = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('ad-form--disabled');
  toggleFields(false);
};

export { activatePage, deactivatePage };
