// RANDOM NUMBER GENERATOR

// Math.random() generates a random number between 0 (inclusive) and 1 (exclusive). By adding 2, we shift the range to be between 2 (inclusive) and 3 (exclusive).

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 17;
myButton.onclick = () => {
  label1.textContent = Math.round(Math.random() * max - min);
  label2.textContent = Math.round(Math.random() * max - min);
  label3.textContent = Math.round(Math.random() * max - min);
};
