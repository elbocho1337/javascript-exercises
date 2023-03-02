const convertToCelsius = function (far) {
  result = (far - 32) * 5 / 9
  rounded = result.toFixed(1)
  return parseFloat(rounded)
};

const convertToFahrenheit = function (cel) {
  result = (cel * 9 / 5) + 32
  rounded = result.toFixed(1)
  return parseFloat(rounded)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
