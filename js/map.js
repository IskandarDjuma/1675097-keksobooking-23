import { activatePage } from './page-state.js';
import { renderOffer } from './card.js';
import { getArrayAds } from './data.js';


const TokyoCoords = {
  lat: 35.68950,
  lng: 139.69171,
};

const MAP_ZOOM = 10;

const MAIN_PIN_SIZE = [52, 52];
const MAIN_ANCHOR = [26, 52];
const SECONDARY_PIN_SIZE = [40, 40];
const SECONDARY_ANCHOR = [20, 40];
const tileLayerAdress = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tileLayerAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: MAIN_PIN_SIZE,
  iconAnchor: MAIN_ANCHOR,
});

const secondaryPinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: SECONDARY_PIN_SIZE,
  iconAnchor: SECONDARY_ANCHOR,
});

const map = L.map('map-canvas')
  .on('load', () => {
    activatePage();
  })
  .setView(TokyoCoords, MAP_ZOOM);

L.tileLayer( tileLayerAdress,
  {
    attribution: tileLayerAttribution,
  },
).addTo(map);

const mainPinMarker = L.marker( TokyoCoords,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

const renderPins = (array) => {
  array.forEach((item) => {
    const pinMarker = L.marker(item.location, {
      icon: secondaryPinIcon,
    });
    pinMarker
      .addTo(map)
      .bindPopup(renderOffer(item));
  });
};

renderPins(getArrayAds(10));
