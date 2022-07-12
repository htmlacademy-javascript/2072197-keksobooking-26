import {getRandomPositiveInteger} from './util.js';
import {getRandomPositiveFloat} from './util.js';
import {getRandomArrayElement} from './util.js';
import {getNewArray} from './util.js';
import {getNewRandomArray} from './util.js';


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
      address: `${randomLat}, ${randomLng}`,
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

const getRentalAds = () => Array.from({ length: SIMILAR_AD_COUNT }, createRentalAd);


export {getRentalAds};
