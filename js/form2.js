import {declOfNum} from './card.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const titleFormOffer = document.querySelector('#title');
const priceFormOffer = document.querySelector('#price');

titleFormOffer.addEventListener('input', () => {
  const valueLength = titleFormOffer.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleFormOffer.setCustomValidity(`Добавьте еще ${MIN_TITLE_LENGTH - valueLength} ${declOfNum(MIN_TITLE_LENGTH, ['cимвол', 'символа', 'символов'])}`);
  } else if (valueLength < MAX_TITLE_LENGTH) {
    titleFormOffer.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} ${declOfNum(MAX_TITLE_LENGTH, ['cимвол', 'символа', 'символов'])}`);
  } else {
    titleFormOffer.setCustomValidity('');
  }
  titleFormOffer.reportValidity();
});

priceFormOffer.addEventListener('input', () => {

});
