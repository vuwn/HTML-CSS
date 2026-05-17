// setTimeOut()

let timeoutID;

function startTimer() {
  timeoutID = setTimeout(() => window.alert('Hello'), 3000);
  console.log('Started');
}

function stopTimer() {
  clearTimeout(timeoutID);
  console.log('Stopped');
}