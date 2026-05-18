// CALCULATOR PROGRAMS

const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
  if(display.value === '1+1') {
    display.value = 3;
  } else {  
      try{
        display.value = eval(display.value);
      } catch(error) {
         display.value = 'Error';
     }
    }
}
