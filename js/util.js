const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;

  return Number(result.toFixed(digits));
};

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length -1)];

const shuffleArray = (array) => {
  const mixedArray = array.slice();

  for (let i = mixedArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const tempValue = mixedArray[i];
    mixedArray[i] = mixedArray[randomIndex];
    mixedArray[randomIndex] = tempValue;
  }

  return mixedArray;
};

const getRandomArray = (arr) => {
  const shuffledArray = shuffleArray(arr);
  const random = getRandomPositiveInteger(0, arr.length -1);

  return shuffledArray.slice(0, random);
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};


export {getRandomPositiveFloat, getRandomPositiveInteger, getRandomArrayElement, getRandomArray, showAlert};
