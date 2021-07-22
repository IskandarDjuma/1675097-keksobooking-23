import { mapFilters } from './page-state.js';
import { renderPins, clearMarkers } from './map.js';
import { ADS_AMOUNT } from './data.js';
import { debounce } from './debounce.js';

const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');


const PRICE_MAP = {
  low: {
    min: 0,
    max: 10000,
  },
  middle: {
    min: 10000,
    max: 50000,
  },
  high: {
    min: 50000,
    max: Infinity,
  },
};

const filterByType = ({offer}) => 'any' === housingType.value || housingType.value === offer.type;


const filterByPrice = ({offer}) => {
  (PRICE_MAP[housingPrice.value]);
  return 'any' === housingPrice.value
    || PRICE_MAP[housingPrice.value].min < offer.price && PRICE_MAP[housingPrice.value].max > offer.price;
};

const filterByRooms = ({offer}) => 'any' === housingRooms.value  || Number(housingRooms.value) === offer.rooms;

const filterByGuests = ({offer}) => 'any' ===  housingGuests.value || Number(housingGuests.value) === offer.guests;

const filterByFeatures = ({offer}) => {
  if (!offer.features) {
    return false;
  }
  const housingFeatures = mapFilters.querySelectorAll('.map__checkbox:checked');
  return Array.from(housingFeatures).every((element) => offer.features.includes(element.value));
};

const filterOffers = (data) => (
  data
    .filter((item) => filterByType(item)
    && filterByPrice(item)
    && filterByRooms(item)
    && filterByGuests(item)
    && filterByFeatures(item))
    .slice(0, ADS_AMOUNT)
);

const updateOffers = (data) => {
  clearMarkers();
  const filteredOffers = filterOffers(data);
  renderPins(filteredOffers);
};

const setFilterListeners = (offers) => {
  mapFilters.addEventListener('change', debounce(() => updateOffers(offers)));
};

export { setFilterListeners };
