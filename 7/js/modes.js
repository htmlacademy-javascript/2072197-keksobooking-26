const adForm = document.querySelector('.ad-form');
const adFormFieldset = adForm.querySelectorAll('fieldset');
const mapForm = document.querySelector('.map__filters');
const mapFormFieldset = mapForm.querySelector('fieldset');
const mapFormSelects = mapForm.querySelectorAll('select');

//неактивное состояние страницы
function turnInactiveMode () {

  adForm.classList.add('ad-form--disabled');

  adFormFieldset.forEach((element) => {
    element.disabled = 'true';
  });

  mapForm.classList.add('map__filters--disabled');

  mapFormSelects.forEach((element) => {
    element.disabled = 'true';
  });

  mapFormFieldset.disabled = 'true';

}

turnInactiveMode();

//активное состояние страницы
function turnActiveMode () {

  adForm.classList.remove('ad-form--disabled');

  adFormFieldset.forEach((element) => {
    element.disabled = 'false';
  });

  mapForm.classList.remove('map__filters--disabled');

  mapFormSelects.forEach((element) => {
    element.disabled = 'false';
  });

  mapFormFieldset.disabled = 'false';
}

turnActiveMode();

export {turnInactiveMode, turnActiveMode};
