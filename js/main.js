import {generateAds, ADS_COUNT } from './data.js';

const similarAds = (count) => new Array(count).fill(null).map((item, index) => generateAds(index));
similarAds(ADS_COUNT);
