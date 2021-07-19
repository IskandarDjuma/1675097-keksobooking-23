import { HOUSING_TYPES } from './data.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const imgTemplate = cardTemplate.querySelector('.popup__photo');

const createAdFeatures = (element, array) => {
  element.innerHTML = '';

  array.forEach((item) => {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature', `popup__feature--${item}`);
    element.appendChild(featureItem);
  });
};

const createAdPhotos = (element, array) => {
  element.innerHTML = '';

  array.forEach((item) => {
    const popupPhotoItem= imgTemplate.cloneNode(true);
    popupPhotoItem.src = item;
    element.appendChild(popupPhotoItem);
  });
};

const declOfNum = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

const renderOffer = ({author, offer}) => {
  const {
    title,
    address,
    price,
    type,
    rooms,
    guests,
    checkin,
    checkout,
    features,
    description,
    photos,
  } = offer;

  const cardElement = cardTemplate.cloneNode(true);
  const featuresBlock = cardElement.querySelector('.popup__features');
  const photosBlock = cardElement.querySelector('.popup__photos');

  cardElement.querySelector('.popup__title').textContent = title;
  cardElement.querySelector('.popup__avatar').src = author.avatar;
  cardElement.querySelector('.popup__text--address').textContent = address;
  cardElement.querySelector('.popup__text--price').textContent= `${price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = HOUSING_TYPES[type].name;
  cardElement.querySelector('.popup__description').textContent = description;
  cardElement.querySelector('.popup__text--capacity').textContent = `${rooms} ${declOfNum(rooms, ['комната', 'комнаты', 'комнат'])} для ${guests} ${declOfNum(guests, ['гостя', 'гостей', 'гостей'])}`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;

  if (features && features.length > 0) {
    createAdFeatures(featuresBlock, features);
  } else {
    featuresBlock.remove();
  }

  if (photos && photos.length > 0) {
    createAdPhotos(photosBlock, photos);
  } else {
    photosBlock.remove();
  }

  return cardElement;
};

export { renderOffer, declOfNum };
