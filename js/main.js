function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (max <= min) {
    return false;
  }

  return  Math.floor(Math.random() * (max - min + 1)) + min;
}

let rand = getRandomInt (45, 8);

function getRandomFloat(min, max, float) {
  if (max <= min) {
    return false;
  }

  return  Math.random().toFixed(float) * (max - min + 1) + min;
}

let rand = getRandomFloat (5, 8, 3);
