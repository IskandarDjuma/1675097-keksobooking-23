import { resetSettings } from './map.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorTemplate.querySelector('.error__button');

const ESC_KEY = 27;
let closeMessage = null;

const onDocumentClick = () => {
  closeMessage();
};

const onDocumentKeydown = (evt) => {
  if (evt.key === ESC_KEY) {
    closeMessage();
  }
};

const showSuccessMessage = () => {
  const successMessage = successTemplate.cloneNode(true);
  document.body.appendChild(successMessage);
  resetSettings();
  document.addEventListener('click', onDocumentClick);
  errorButton.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

const showErrorMessage = (message) => {
  const errorMessage = errorTemplate.cloneNode(true);
  const textMessage = errorMessage.querySelector('.error__message');
  if (message) {
    textMessage.textContent = message;
  }
  document.body.appendChild(errorMessage);
  const errorBlock = document.querySelector('.error');
  errorBlock.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

closeMessage = () => {
  const successMessagePopup = document.querySelector('.success');
  const errorMessagePopup = document.querySelector('.error');

  if (successMessagePopup) {
    successMessagePopup.remove();
  }

  if (errorMessagePopup) {
    errorMessagePopup.remove();
  }

  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onDocumentKeydown);
};

export { showErrorMessage, showSuccessMessage };
