import { activatePage } from './page-state.js';
import { renderOffer } from './card.js';
import { getData } from './server.js';
import { showAlert } from './util.js';
import { adForm, mapFilters } from './page-state.js';
const resetButton = document.querySelector('.ad-form__reset');
const address = document.querySelector('#address');

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

const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);

const renderPins = (array) => {
  array.forEach((item) => {
    const pinMarker = L.marker(item.location, {
      icon: secondaryPinIcon,
    });
    pinMarker
      .addTo(markerGroup)
      .bindPopup(renderOffer(item));
  });
};

const onDataLoad = (offers) => {
  renderPins(offers.slice(0, ADS_AMOUNT));
  mapFilters.addEventListener('reset', () => {
    markerGroup.clearLayers();
  });
};

const onDataError = () => {
  showAlert('Не удалось отправить форму. Попробуйте ещё раз');
};

map.on('load', () => {
  activatePage();
  getData(onDataLoad, onDataError);
}).setView(TokyoCoords, MAP_ZOOM);

L.tileLayer( LAYER,
  {
    attribution: LAYER_ATTRIBUTION,
  },
).addTo(map);


const mainPinMarker = L.marker( TokyoCoords,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

const setDefaultAddress = () => {
  mainPinMarker.setLatLng(TokyoCoords);
  map.setView(TokyoCoords, MAP_ZOOM);
};

const resetSettings = () => {
  setDefaultAddress();
  adForm.reset();
  mapFilters.reset();
};

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetSettings();
});


