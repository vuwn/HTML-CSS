

// ERROR

const dividend = Number(window.prompt('Enter the divindend: '));
const divisor = Number(window.prompt('Enter the divisor: '));


 try{
  if(isNaN(dividend || divisor)) {
    throw new Error('Value must be a number');
  }
  if(divisor === 0) {
    throw new Error('Divisor cannot be zero');
  }
 } catch(error) {
  console.error(error);
  alert(error);
 } finally {
  console.log('Operation completed');
 }