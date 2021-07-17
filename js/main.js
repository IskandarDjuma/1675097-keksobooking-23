// import { renderOffer } from './card.js';
import { activatePage } from './page-state.js';
import { setFormListeners } from './validation.js';
import './map.js';
import './server.js';
import { renderPins } from './map.js';
import { getData } from './server.js';

const ADS_AMOUNT = 10;

getData((offers) => {
  renderPins(offers.slice(0, ADS_AMOUNT));
});

activatePage();
setFormListeners();

