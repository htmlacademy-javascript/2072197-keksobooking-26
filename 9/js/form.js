const form = document.querySelector('.ad-form');
const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'div',
}, false);

function validateTitle (value) {
  return value.length >= 30 && value.length <= 100;
}

pristine.addValidator(form.querySelector('#title'), validateTitle, 'От 30 до 100 символов');

const price = form.querySelector('#price');

function validatePrice (value) {
  return value <= 100000;
}

pristine.addValidator(price, validatePrice, 'До 100000 рублей');

const rooms = form.querySelector('#room_number');
const guests = form.querySelector('#capacity');
const maxGuests = {
  '1 комната': ['для 1 гостя'],
  '2 комнаты': ['для 1 гостя', 'для 2 гостей'],
  '3 комнаты': ['для 1 гостя', 'для 2 гостей', 'для 3 гостей'],
  '100 комнат': ['не для гостей'],
};

function validateRoomsAndGuests () {
  return maxGuests[rooms.value].includes(guests.value);
}

function getCapacityErrorMessage () {
  return `Внимание! ${rooms.value} не подходит ${guests.value}`;
}

pristine.addValidator(rooms, validateRoomsAndGuests, getCapacityErrorMessage);

const minPrices = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const type = form.querySelector('#type');
type.addEventListener('change', () => {
  price.placeholder = minPrices[type.value];
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  pristine.validate();

});
