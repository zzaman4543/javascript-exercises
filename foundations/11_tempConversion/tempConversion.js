const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  const celsiusOneDecimalPlace = Math.round(celsius * 10) / 10;
  return celsiusOneDecimalPlace;
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = (celsius * (9 / 5)) + 32;
  const fahrenheitOneDecimalPlace = Math.round(fahrenheit * 10) / 10;
  return fahrenheitOneDecimalPlace;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
