// object = A collection of ralated properties and/or methods
//           Can represent real world objects (people, products, places...)
//           objects = {key: value,
//                      function()}

// const person1 = {
//   firstName: "Tayler",
//   lastName: "Smith",
//   age: 30,
//   isEmployed: true,
//   sayHello: function () {
//     console.log("Hi, I am Taylor Smith");
//   },
// };

// person1.sayHello();

// this = reference to the object where THIS is used
//        the objects depends on the imediate context
//        person.name = this.name

const person2 = {
  firstName: "Charles",
  favFood: "Pizza",
  age: 30,
  sonName: "Charlies",
  isEmployed: true,
  eating: function () {
    console.log(`Hi, I am Taylor Smith, I like eating ${this.favFood}`);
  },
  sayHello: function () {
    console.log(`Hello he is my son, his name is ${this.sonName}`);
  },
};

// person2.eating();
// person2.sayHello();
console.log(this);
