// COUNTER PROGRAM

// // It's not optimized but it works=))
// const decreaseBtn = document.getElementById("decreaseBtn");
// decreaseBtn.onclick = () => {
//   const counter = document.getElementById("countLabel");
//   counter.innerText = parseInt(counter.innerText) - 1;
// };
// // parseInt(): converts a string to an integer
// // innnerText: gets or sets the text content of an element
// const increaseBtn = document.getElementById("increaseBtn");
// increaseBtn.onclick = () => {
//   const counter = document.getElementById("countLabel");
//   counter.innerText = parseInt(counter.innerText) + 1;
// };

// const resetBtn = document.getElementById("resetBtn");
// resetBtn.onclick = () => {
//   const counter = document.getElementById("countLabel");
//   counter.innerText = 0;
// };

// OPTIMIZED VERSION
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

decreaseBtn.onclick = () => {
  count--;
  countLabel.textContent = count;
};
increaseBtn.onclick = () => {
  count++;
  countLabel.textContent = count;
};
resetBtn.onclick = () => {
  count = 0;
  countLabel.textContent = count;
};

// getElementById: returns the element with the specified ID
