import { mapFilters } from './page-state.js';
import { renderPins, clearMarkers } from './map.js';

const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const housingFeatures = mapFilters.querySelectorAll('.map__checkbox:checked');

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

const filterByType = (offers) => {
  housingType.value === offers.offer.type || 'any' === housingType.value  ;
};

const filterByPrice = (offers) => {
  PRICE_MAP[housingPrice.value].min < offers.offer.price && PRICE_MAP[housingPrice.value].max > offers.offer.price;
};

const filterByRooms = (offers) => {
  Number(housingRooms.value) === offers.offer.rooms || 'any' === housingRooms.value  ;
};

const filterByGuests = (offers) => {
  Number(housingGuests.value) === offers.offer.guests  || 'any' ===  housingGuests.value;
};

const filterByFeatures = (item) => {
  Array.from(housingFeatures).every((element) => {
    item.offer.features.includes(element.value);
  });
};

const filterOffers = (data) => {
  data.filter(filterByType).
    filter(filterByRooms).
    filter(filterByPrice).
    filter(filterByGuests).
    filter(filterByFeatures);
};

const updateOffers = (data) => {
  clearMarkers;
  const filteredOffers = filterOffers(data);
  renderPins(filteredOffers);
};

const setFilterListeners = (offers) => {
  mapFilters.addEventListener('change', () => updateOffers(offers));
};

export { setFilterListeners };
