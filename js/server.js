const URL_POST = 'https://23.javascript.pages.academy/keksobooking';
const URL_GET = 'https://23.javascript.pages.academy/keksobooking/data';

const getData = (onSuccess) => {
  fetch(URL_GET)
    .then((response) => response.json())
    .then((offers) => {
      onSuccess(offers);
    });
};

const sendData= (onSuccess, onFail, body) => {
  fetch(
    URL_POST,
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
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
