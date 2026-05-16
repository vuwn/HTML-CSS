// constructor = special method for defining the
//               properties and methods of objects

function Car(make, model, years, color) {
  this.make = make;
  this.model = model;
  this.years = years;
  this.color = color;
}

const car1 = new Car("Toyota", "Camry", 2020, "red");
const car2 = new Car("Honda", "Civic", 2019, "blue");

console.log(car1.make);
console.log(car1.model);
console.log(car1.years);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.years);
console.log(car2.color);
