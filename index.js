// NUMBER GUESS GAME

let guess,
  attempts = 0,
  answer;
let min = 1,
  max = 100;
let running = true;
answer = Math.round(Math.random() * (max - min));
console.log(answer);

while (running) {
  guess = window.prompt(`Guess a number between ${min} - ${max}`);
  if (guess < min || guess > max) {
    window.alert(`Please enter a number between ${min} - ${max}`);
  } else if (guess < answer) {
    window.alert(`Too low! Try again!`);
    attempts++;
  } else if (guess > answer) {
    window.alert(`Too high! Try again!`);
    attempts++;
  } else if (guess == answer) {
    window.alert(
      `You are correct! The answer was ${answer} with ${attempts} attempts`
    );
    running = false;
  }
}
