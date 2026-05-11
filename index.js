// .checked = property that determines the checked state of
//            an HTML checkbox or radio button elemment

const subcribeBtn = document.getElementById("subcribeBtn");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const myButton = document.getElementById("myButton");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

myButton.onclick = () => {
  if (subcribeBtn.checked) {
    subResult.textContent = `You are subcribed`;
  } else {
    subResult.textContent = `You are not subcribed`;
  }

  if (visaBtn.checked) {
    payResult.textContent = `You are paying with Visa`;
  } else if (masterCardBtn.checked) {
    payResult.textContent = `You are paying with MasterCard`;
  } else if (paypalBtn.checked) {
    payResult.textContent = `You are paying with PayPal`;
  } else {
    payResult.textContent = "You must select a payment method";
  }
};
