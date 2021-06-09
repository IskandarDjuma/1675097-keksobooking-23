const USERS_COUNT = 10;

const MIN_PRICE = 1000;
const MAX_PRICE = 1000000;

const MIN_ROOMS = 1;
const MAX_ROOMS = 5;

const MIN_GUEST = 1;
const MAX_GUEST = 20;

const MIN_AXIS_X = 35.65000;
const MAX_AXIS_X = 35.70000;

const MIN_AXIS_Y = 139.70000;
const MAX_AXIS_Y = 139.80000;

const SIMILAR_ADS_COUNT = 10;

const TITLE = [
  "Уютная квартира в центре Рима",
  "Роскошный дом у моря",
  "Атмосферный лофт",
  "Комната в коммунальной квартире"
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

const FEATURES = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner"
]

const DESCRIPTION = [
  "Снять комнату в Риме с ванной комнатой в центре посуточно, двухместная кровать",
  "Дом не далеко от пляжа",
  "Квартира в центре города, без воды"
]

const PHOTOS = [
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg"
]

const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;

  return Number(result.toFixed(digits));
}

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const generateAvatars = () => {
  let avatarList = [];

  for (var i = 1; i < USERS_COUNT + 1; i++) {
    if (i < 10) {
      i = '0' + i;
    }
    let avatars = 'img/avatars/user' + i + '.png';
    avatarList.push(avatars);
  }
  return avatarList;
}

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length -1)];
}

const getShuffleArray = (arr) => {
	let result = [];

	while (arr.length > 0) {
		let random = getRandomPositiveInteger(0, arr.length - 1);
		let elem = arr.splice(random, 1)[0];
		result.push(elem);
	}

	return result;
}

function shuffleArray(array) {
  var mixedArray = array.slice();
  for (var i = mixedArray.length - 1; i > 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var tempValue = mixedArray[i];
    mixedArray[i] = mixedArray[randomIndex];
    mixedArray[randomIndex] = tempValue;
  }
  return mixedArray;
}

const generateAds = () => {
  return {
    author: {
      avatar: generateAvatars()
    },
    offer : {
      title: getRandomArrayElement(TITLE),
      price: getRandomPositiveInteger(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(TYPE),
      guests: getRandomPositiveInteger(MIN_GUEST, MAX_GUEST),
      checkin: getRandomArrayElement(CHECK_TIME),
      checkout: getRandomArrayElement(CHECK_TIME),
      features: getShuffleArray(FEATURES),
      photos: getShuffleArray(PHOTOS),
      description: getRandomArrayElement(DESCRIPTION),
    },
    location : {
      lat: getRandomPositiveFloat (MIN_AXIS_X, MAX_AXIS_X, 5),
      lng: getRandomPositiveFloat (MIN_AXIS_Y, MAX_AXIS_Y, 5),
    }
  }
}

const similarAds = new Array(SIMILAR_ADS_COUNT).fill(null).map(() => generateAds());
console.log(similarAds)

