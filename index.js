// IF STATEMENT = If a condition is true, execute some code
//                If not do something else

const myText = document.getElementById("myText");
const myButton = document.getElementById("myButton");
const myP = document.getElementById("myP");

myButton.onclick = () => {
  let age = myText.value;
  age = Number(age);

  if (age > 100) {
    myP.textContent = `You are too old to go this site!`;
  } else if (age >= 18) {
    myP.textContent = `You are old enough to go this site!`;
  } else if (age == 0) {
    myP.textContent = `You can't enter, you were just born`;
  } else if (age < 0) {
    myP.textContent = `Your age can't below 0!`;
  } else {
    myP.textContent = `You must be 18+ to go this site!`;
  }
};
