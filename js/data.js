const HOUSING_TYPES = {
  bungalow: {
    name : 'Бунгало',
    minPrice : 0,
  },
  flat: {
    name : 'Квартира',
    minPrice: 1000,
  },
  hotel: {
    name : 'Отель',
    minPrice : 3000,
  },
  house: {
    name : 'Дом',
    minPrice : 5000,
  },
  palace: {
    name : 'Дворец',
    minPrice : 10000,
  },
};

const MIN_TITLE = 30;
const MAX_TITLE = 100;

const roomGuestRation = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const TokyoCoords = {
  lat: 35.68950,
  lng: 139.69171,
};

const MAP_ZOOM = 10;
const ADS_AMOUNT = 10;
const MAIN_PIN_SIZE = [52, 52];
const MAIN_ANCHOR = [26, 52];
const SECONDARY_PIN_SIZE = [40, 40];
const SECONDARY_ANCHOR = [20, 40];
const LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const API_URL = 'https://23.javascript.pages.academy/keksobooking';

export { MIN_TITLE, MAX_TITLE, roomGuestRation, API_URL, HOUSING_TYPES, TokyoCoords, MAP_ZOOM, ADS_AMOUNT, MAIN_PIN_SIZE, MAIN_ANCHOR, SECONDARY_PIN_SIZE, SECONDARY_ANCHOR, LAYER, LAYER_ATTRIBUTION };
