import { resetSettings } from './map.js';

const ESC_KEY = 'Escape';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorTemplate.querySelector('.error__button');

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
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onDocumentClick);
  errorButton.addEventListener('click', onDocumentClick);
};

const showErrorMessage = (message) => {
  const errorMessage = errorTemplate.cloneNode(true);
  const textMessage = errorMessage.querySelector('.error__message');
  if (message) {
    textMessage.textContent = message;
  }
  document.body.appendChild(errorMessage);
  document.addEventListener('keydown', onDocumentKeydown);
  const errorBlock = document.querySelector('.error');
  errorBlock.addEventListener('click', onDocumentClick);
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

  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onDocumentClick);
};

export { showErrorMessage, showSuccessMessage };
