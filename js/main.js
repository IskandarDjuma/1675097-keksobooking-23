import { getArrayAds } from './data.js';
import { renderOffer } from './card.js';
import { activatePage } from './page-state.js';
import { setFormListeners } from './validation.js';

const ADS_AMOUNT = 1;

const map = document.querySelector('#map-canvas');

activatePage();
setFormListeners();
const ads = getArrayAds(ADS_AMOUNT);
const card = renderOffer(ads[0]);

map.appendChild(card);
