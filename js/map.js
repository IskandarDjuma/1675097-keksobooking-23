import { activatePage } from './page-state.js';
import { generateAd } from './data.js';
import { renderOffer } from './card.js';


const TOKYO = {
  lat: 35.68950,
  lng: 139.69171,
};

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const secondaryPinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const map = L.map('map-canvas')
  .on('load', () => {
    activatePage();
  })
  .setView(TOKYO, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const marker = L.marker( TOKYO,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.addTo(map);

generateAd().location.forEach(({lat, lng}) => {
  const marker = L.marker({
    lat,
    lng,
  },
  {
    secondaryPinIcon,
  });

  marker
    .addTo(map)
    .bindPopup(renderOffer);
});

