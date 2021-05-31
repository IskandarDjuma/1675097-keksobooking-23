// Функция, возвращающая случайное число в диапазоне
function getRandomInt(min, max) {
  if (max <= min) {
    return false;
  }

  return  Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt (45, 8));

function getRandomFloat(min, max, float) {
  if (max <= min) {
    return false;
  }

  return  Math.random().toFixed(float) * (max - min + 1) + min;
}

console.log(getRandomFloat (5, 8, 3));
