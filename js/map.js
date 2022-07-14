import {getRentalAds} from './data.js';
import {turnActiveMode} from './modes.js';
import {renderCard} from './similar_elements.js';

const CENTER_TOKYO = {
  lat: 35.691566,
  lng: 139.753620,
};

const ZOOM_MAP = 12;

const map = L.map('map-canvas').on('load', () => {
  turnActiveMode();
}).setView(CENTER_TOKYO, ZOOM_MAP);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [48, 48],
  iconAnchor: [24, 48],
});

const pinAd = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});


const mainMarker = L.marker(CENTER_TOKYO, {draggable: true, icon: mainPinIcon});

mainMarker.addTo(map);

const address = document.querySelector('#address');

mainMarker.on('moveend', (evt) => {
  const addressObject = evt.target.getLatLng();
  address.value = `lat: ${addressObject.lat.toFixed(5)}, lng: ${addressObject.lng.toFixed(5)}`;
});

const ads = getRentalAds();

ads.forEach((ad) => {
  const marker = L.marker(ad.location, {pinAd});
  marker
    .addTo(map)
    .bindPopup(renderCard(ad));
});

const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 0,
  step: 1000,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
    },
    from: function (value) {
      return parseFloat(value);
    }
  }
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

valueElement.addEventListener('change', () => {
  sliderElement.noUiSlider.set(valueElement.value);
});
