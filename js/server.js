import { API_URL } from './data.js';

const getData = (onSuccess, onFail) => {
  fetch(`${API_URL}/data`)
    .then((response) => response.json())
    .then((offers) => {
      onSuccess(offers);
    })
    .catch(() => {
      onFail();
    });
};

const sendData= (onSuccess, onFail, body) => {
  fetch(
    API_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };
