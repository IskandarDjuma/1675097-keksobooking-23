// Функция, возвращающая случайное число в диапазоне
function getRandomInt(min, max) {
  if (max <= min) {
    return false;
  }

  return  Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt (45, 8));

function getRandomFloat(min, max, float) {
 
  if (min < 0 || min >= max)  {
    throw new RangeError('Параметр должен быть между ' + Min + ' и ' + Max);
  } 
  return Number((Math.random() * (max - min + 1) + min).toFixed(float)); 
  }  

console.log(getRandomFloat(1, 55, 1));
