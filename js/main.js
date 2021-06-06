// // Функция, возвращающая случайное число в диапазоне
// function getRandomInt(min, max) {
//   if (min < 0 || min >= max)  {
//     throw new RangeError('Параметр должен быть между ' + Min + ' и ' + Max);
//   }

//   return  Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomInt (45, 8));

// function getRandomFloat(min, max, float) {

//   if (min < 0 || min >= max)  {
//     throw new RangeError('Параметр должен быть между ' + Min + ' и ' + Max);
//   }
//   return Number((Math.random() * (max - min + 1) + min).toFixed(float));
//   }

// console.log(getRandomFloat(1, 55, 1));

function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return Number(result.toFixed(digits));
}

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const AVATAR = [
  "img/avatars/user01.png",
  "img/avatars/user02.png",
  "img/avatars/user03.png",
  "img/avatars/user04.png",
  "img/avatars/user05.png",
  "img/avatars/user06.png",
  "img/avatars/user07.png",
  "img/avatars/user08.png"
]

const TYPE = [
  "palace",
  "flat",
  "house",
  "bungalow",
  "hotel"
]

const CHECK_TIME = [
  "12:00",
  "13:00",
  "14:00"
]

const FEATCHERS = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner"
]

const PHOTOS = [
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg"
]



// const getRandomArray = (array) => {
  // Так и не смог создать массив случайной длины из значений:
// }

// Функция по получению случайного элемента массива
const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length -1)];
}

const createAuthor = () => {
  return {
    avatar : getRandomArrayElement(AVATAR)
  }
}
console.log(createAuthor());

const createOffer = () => {
  return {
    title: "Уютная квартира в центре Рима",
    price: getRandomPositiveInteger(1000, 100000),
    type: getRandomArrayElement(TYPE),
    guests: getRandomPositiveInteger(1, 30),
    checkin: getRandomArrayElement(CHECK_TIME),
    checkout: getRandomArrayElement(CHECK_TIME),
    featchers: getRandomArray (FEATCHERS),
    description: "Снять комнату в Риме с ванной комнатой в центре посуточно, двухместная кровать",
  }
}
console.log(createOffer());

const createLocation = () => {
  return {
    lat: getRandomPositiveFloat (35.65000, 35.70000, digits = 5),
    lng: getRandomPositiveFloat (139.70000, 139.80000, digits = 5),
  }
}
console.log(createLocation());
