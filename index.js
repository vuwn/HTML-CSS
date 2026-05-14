// TEMPERATURE CONVERSION PROGRAM

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const convertResult = document.getElementById("convertResult");

let temp;
const convert = () => {
  if (toFahrenheit.checked) {
    temp = (9 / 5) * textBox.value + 32;
    convertResult.textContent = `${temp.toFixed(1)}°F`;
  } else if (toCelsius.checked) {
    temp = (5 / 9) * (textBox.value - 32);
    convertResult.textContent = `${temp.toFixed(1)}°C`;
  } else {
    convertResult.textContent = "Please select a conversion type.";
  }
};
