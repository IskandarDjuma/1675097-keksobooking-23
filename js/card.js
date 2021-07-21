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
  const cardTitle = cardElement.querySelector('.popup__title');
  const cardAddress = cardElement.querySelector('.popup__text--address');
  const cardPrice = cardElement.querySelector('.popup__text--price');
  const cardType = cardElement.querySelector('.popup__type');
  const cardCapacity = cardElement.querySelector('.popup__text--capacity');
  const cardTime = cardElement.querySelector('.popup__text--time');
  const cardDescription = cardElement.querySelector('.popup__description');
  const cardAvatar = cardElement.querySelector('.popup__avatar');

  cardTitle.textContent = title ? title : cardTitle.remove();
  cardAddress.textContent = address ? address : cardAddress.remove();
  cardPrice.textContent = price ? `${price} ₽/ночь` : cardPrice.remove();
  cardType.textContent = type ? HOUSING_TYPES[type].name : cardType.remove();
  cardCapacity.textContent = rooms && guests ? `${rooms} ${declOfNum(rooms, ['комната', 'комнаты', 'комнат'])} для ${guests} ${declOfNum(guests, ['гостя', 'гостей', 'гостей'])}` : cardCapacity.remove();
  cardTime.textContent = checkin && checkout ? `Заезд после ${checkin}, выезд до ${checkout}` : cardTime.remove();
  cardDescription.textContent = description ? description : cardDescription.remove();
  cardAvatar.src = author.avatar ? author.avatar : cardAvatar.remove();


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
