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

//функция для получения случайного элемента массива
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

export {getRandomPositiveInteger};
export {getRandomPositiveFloat};
export {getRandomArrayElement};
export {getNewArray};
export {getNewRandomArray};
