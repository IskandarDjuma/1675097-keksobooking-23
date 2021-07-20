import { activatePage } from './page-state.js';
import { renderOffer } from './card.js';
import { getData } from './server.js';
import { showAlert } from './util.js';
import { adForm, mapFilters } from './page-state.js';
import { setFilterListeners } from './filter.js';
import { TokyoCoords, MAP_ZOOM, ADS_AMOUNT, MAIN_PIN_SIZE, MAIN_ANCHOR, SECONDARY_PIN_SIZE, SECONDARY_ANCHOR, LAYER, LAYER_ATTRIBUTION } from './data.js';

const resetButton = document.querySelector('.ad-form__reset');
const address = document.querySelector('#address');

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

const clearMarkers =  mapFilters.addEventListener('reset', () => {
  markerGroup.clearLayers();
});

const onDataLoad = (offers) => {
  renderPins(offers.slice(0, ADS_AMOUNT));
  setFilterListeners(offers);
};

const onDataError = () => {
  showAlert('Не удалось отправить форму. Попробуйте ещё раз');
};

const mapLoad = () => {
  map.on('load', () => {
    activatePage();
    getData(onDataLoad, onDataError);
  }).setView(TokyoCoords, MAP_ZOOM);
};


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

export { resetSettings, renderPins, clearMarkers, mapLoad };
