import { setFormListeners } from './validation.js';
import { mapLoad } from './map.js';
import { deactivatePage } from './page-state.js';

deactivatePage();
setFormListeners();
mapLoad();
