const successTemplate = document.querySelector('#success').content;
const errorTemplate = document.querySelector('#error').content;
const errorButton = errorTemplate.querySelector('.error__button');

const ESC_KEY = 27;

const onDocumentClick = () => {
  closeMessage();
};

const onDocumentKeydown = (evt) => {
  if (evt.key === ESC_KEY) {
    closeMessage(); // не знаю как объявить функцию, чтобы принимала данные находящиеся ниже нее...
  }
};

const showSuccessMessage = () => {
  const successMessage = successTemplate.cloneNode(true);
  document.body.appendChild(successMessage);
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

const closeMessage = function () {
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
