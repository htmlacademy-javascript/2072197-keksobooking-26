// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveFloat(a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

const TITLES = [
  'Большие уютные аппартаменты',
  'Квартира-студия',
  'Номер с видом на реку',
  'Номер с видом на город',
  'Номер с французским балконом',
  'Пентхаус в элитном районе',
  'Аппартаменты в историческом центре города',
  'Номер с джакузи',
  'Тихий номер в спальном районе города',
  'Номер с видом на море',
];

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const CHECKINS = ['12:00', '13:00', '14:00'];

const CHECKOUTS = ['12:00', '13:00', '14:00'];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'Потрясающее место',
  'Лучшее место в городе',
  'Лучшее место для отдыха большой семьи',
  'Лучшее место для пары',
  'Идеальное место для ценителей комфорта',
  'Тихое место для отдыха',
  'Место с лучшим интерьером',
  'Лучшее место для тех, кто находится в деловой поездке',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const SIMILAR_AD_COUNT = 10;

function getRandomArrayElement(elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

//функция для перемешивания массива
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//функция для получения нового перемешенного обрезанного массива
function getNewArray(array) {
  const newArray = shuffleArray(array).slice(
    getRandomPositiveInteger(0, array.length - 1)
  );
  return newArray;
}

//функция для получения массива случайной длины с возможностью повторения элементов
function getNewRandomArray(arr) {
  const newRandomArray = [];
  for (let i = 0; i <= getRandomPositiveInteger(0, 10); i++) {
    newRandomArray.push(arr[getRandomPositiveInteger(0, arr.length - 1)]);
  }
  return newRandomArray;
}

//функция для получения неповторяющихся значений
let number = 0;
function getAvatarNumber() {
  for (let i = 1; i <= SIMILAR_AD_COUNT; i++) {
    number += 1;
    if (number < 10) {
      return `img/avatars/user0${number}.png`;
    }
    return `img/avatars/user${number}.png`;
  }
}

const createRentalAd = function () {
  const randomLat = getRandomPositiveFloat(35.65, 35.7, 5);
  const randomLng = getRandomPositiveFloat(139.7, 139.8, 5);

  return {
    author: {
      avatar: getAvatarNumber(),
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      addres: `${randomLat}, ${randomLng}`,
      price: getRandomPositiveInteger(5000, 20000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomPositiveInteger(1, 3),
      guests: getRandomPositiveInteger(2, 4),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      features: getNewArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getNewRandomArray(PHOTOS),
    },
    location: {
      lat: randomLat,
      lng: randomLng,
    },
  };
};

// eslint-disable-next-line no-unused-vars
const rentalAds = Array.from({ length: 10 }, createRentalAd);
