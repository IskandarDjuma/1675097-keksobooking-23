import { getRandomPositiveFloat, getRandomPositiveInteger, getRandomArrayElement, getRandomArray } from './util.js';

const MIN_PRICE = 1000;
const MAX_PRICE = 1000000;

const MIN_ROOMS = 1;
const MAX_ROOMS = 5;

const MIN_GUEST = 1;
const MAX_GUEST = 20;

const MIN_AXIS_X = 35.65000;
const MAX_AXIS_X = 35.70000;

const MIN_AXIS_Y = 139.70000;
const MAX_AXIS_Y = 139.80000;
const AXIS_FLOAT = 5;

const TITLES = [
  'Уютная квартира в центре Рима',
  'Роскошный дом у моря',
  'Атмосферный лофт',
  'Комната в коммунальной квартире',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

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

const CHECK_TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Снять комнату в Риме с ванной комнатой в центре посуточно, двухместная кровать',
  'Дом не далеко от пляжа',
  'Квартира в центре города, без воды',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const generateAd = (index) => {
  const locationLat = getRandomPositiveFloat (MIN_AXIS_X, MAX_AXIS_X, AXIS_FLOAT);
  const locationLng= getRandomPositiveFloat (MIN_AXIS_Y, MAX_AXIS_Y, AXIS_FLOAT);

  return {
    author: {
      avatar: `img/avatars/user${index < 10 ? `0${index}` : index}.png`,
    },
    offer : {
      title: getRandomArrayElement(TITLES),
      address: `${locationLat}, ${locationLng}`,
      price: getRandomPositiveInteger(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomPositiveInteger(MIN_ROOMS, MAX_ROOMS),
      guests: getRandomPositiveInteger(MIN_GUEST, MAX_GUEST),
      checkin: getRandomArrayElement(CHECK_TIME),
      checkout: getRandomArrayElement(CHECK_TIME),
      features: getRandomArray(FEATURES),
      photos: getRandomArray(PHOTOS),
      description: getRandomArrayElement(DESCRIPTIONS),
    },
    location : {
      lat: locationLat,
      lng: locationLng,
    },
  };
};

const getArrayAds = (count) => new Array(count).fill(null).map((item, index) => generateAd(index + 1));

export { getArrayAds, HOUSING_TYPES };
