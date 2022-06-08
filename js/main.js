function getRandomInteger(min, max) {
  if (max < min) {
    let changer = max;
    max = min;
    min = changer;
  }
  if (min === max) {
    return min;
  }
  if ((min, max >= 0)) {
    return Math.floor(Math.random() * (max + 1));
  }
}

function getRandomDigits(min, max, digits) {
  if (max < min) {
    let changer = max;
    max = min;
    min = changer;
  }
  if (min === max) {
    return min;
  }
  if ((min, max >= 0)) {
    return Number((Math.random() * max).toFixed(digits));
  }
}
