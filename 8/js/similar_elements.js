import {getRentalAds} from './data.js';

const TYPES_OF_HOUSING = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};


const map = document.querySelector('#map-canvas');
const similarAdTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarAds = getRentalAds();

similarAds.forEach((ad) => {
  const adElement = similarAdTemplate.cloneNode(true);
  adElement.querySelector('.popup__avatar').src = ad.author.avatar;
  adElement.querySelector('.popup__title').textContent = ad.offer.title;
  adElement.querySelector('.popup__text--address').textContent = ad.offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
  adElement.querySelector('.popup__type').textContent = TYPES_OF_HOUSING[ad.offer.type];
  adElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
  adElement.querySelector('.popup__description').textContent = ad.offer.description;

  const featureContainer = adElement.querySelector('.popup__features');
  const featureListFragment = document.createDocumentFragment();
  ad.offer.features.forEach((feature) => {
    const featureListItem = featureContainer.querySelector(`.popup__feature--${  feature}`);

    if (featureListItem) {
      featureListFragment.append(featureListItem);
    }
  });
  featureContainer.innerHTML = '';
  featureContainer.append(featureListFragment);


  const photoTemplate = adElement.querySelector('.popup__photos');
  photoTemplate.innerHTML = '';
  for (let i = 0; i < ad.offer.photos.length; i++) {
    const element = document.createElement('img');
    element.classList.add('popup__photo');
    element.src = ad.offer.photos[i];
    element.width = 45;
    element.height = 40;
    element.alt = 'Фотография жилья';
    photoTemplate.appendChild(element);
  }

  map.appendChild(adElement);
});

