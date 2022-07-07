// import {turnActiveMode} from './js/modes.js';

// import { turnActiveMode } from './modes';

const CENTER_TOKYO = {
  lat: 35.691566,
  lng: 139.753620,
};

const ZOOM_MAP = 12;

const map = L.map('map-canvas').on('load', () => {
  // turnActiveMode();
}).setView(CENTER_TOKYO, ZOOM_MAP);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [42, 42],
  iconAnchor: [21, 42],
});


const mainMarker = L.marker(CENTER_TOKYO, {draggable: true, icon: mainPinIcon});

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});
