import {getArrayAds, TYPES_TRANSLATE } from './data';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const imgTemplate = document.querySelector('#card').content.querySelector('.popup__photo');
const arrayAds = getArrayAds();

const getAdsOffer = (ads) => {
  arrayAds.forEach((ad) => {
    const adsElement = cardTemplate.cloneNode(true);
    adsElement.querySelector('.popup__title').textContent = ad.offer.title;
    adsElement.querySelector('.popup__text--address').textContent = ad.offer.address;
    adsElement.querySelector('.popup__text--price').textContent= `${ad.offer.price} ₽/ночь`;
    adsElement.querySelector('.popup__type').textContent = TYPES_TRANSLATE [ad.offer.type];
    adsElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms}комнаты для ${ad.offer.guests} гостей`;
    adsElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;

    adsElement.querySelector('.popup__description').textContent = ad.offer.description;

    adsElement.querySelector('.popup__avatar').src = ad.author.avatar;
  });
};

export {getAdsOffer};


