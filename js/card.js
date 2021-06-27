import { TYPES_TRANSLATE } from './data.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const imgTemplate = cardTemplate.querySelector('.popup__photo');

const getFeautersContainer = function (element, array) {
  element.innerHTML = '';

  array.forEach((item) => {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature', `popup__feature--${item}`);
    element.appendChild(featureItem);
  });
};

const createPhotosAd = (element, array) => {
  element.innerHTML = '';

  array.forEach((item) => {
    const popupPhotoItem= imgTemplate.cloneNode(true);
    popupPhotoItem.src = item;
    element.appendChild(popupPhotoItem);
  });
};

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

  cardElement.querySelector('.popup__title').textContent = title;
  cardElement.querySelector('.popup__text--address').textContent = address;
  cardElement.querySelector('.popup__text--price').textContent= `${price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = TYPES_TRANSLATE [type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  getFeautersContainer(cardElement.querySelector('.popup__features'), features);
  cardElement.querySelector('.popup__description').textContent = description;
  createPhotosAd(cardElement.querySelector('.popup__photos'), photos);
  cardElement.querySelector('.popup__avatar').src = author.avatar;

  return cardElement;

};

export {renderOffer};


