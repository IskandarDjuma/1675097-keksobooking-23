import {getArrayAds} from './data.js';
import {getAdsOffer} from '/card.js';

const ADS_COUNT = 1;

const similarOffer = document.querySelector('#map-canvas');

getAdsOffer(getArrayAds(ADS_COUNT));
similarOffer.appendChild(getAdsOffer(getArrayAds));


