// destructure = extract values from arrayd or objects
// then assign them to variables in convienient way
// [] = to perform array destructuring
// {} = to perform object destructuring

// SWAP 2 VARIABLES
// let a = 1;
// let b = 2;
//  [a, b] = [b, a];
//  console.log(a, b);


// SWAP 2 ELEMENT IN AN ARRAY
//  const colors = ['blue', 'red', 'purple', 'yellow'];
// [colors[0], colors[2] = colors[2], colors[0]];
// console.log(colors);

// ASSIGN ARRAY ELEMENTS TO VARIABLES
//  const colors = ['blue', 'red', 'purple', 'yellow', 'white'];
// const [firstColor, secondColor, thirdColor, ...extraColor] =  colors;
// console.log(firstColor, secondColor, thirdColor, extraColor);

// EXTRACT VALUES FROM OBJECTS

function displayPerson({firstName, lastName, age, job="Singer"}) {
 console.log(`name: ${firstName} ${lastName}`);
 console.log(`age: ${age}`);
 console.log(`job: ${job}`);
}

const person1 = {
  firstName: 'Vincent',
  lastName: 'Nguyen',
  age: 18,
  job: 'Student'
}

const person2 = {
  firstName: 'Talor',
  lastName: 'Smith',
  age: 30,
}

displayPerson(person1);