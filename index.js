// nested objects

// const person = {
//   name: 'Vincent Nguyen',
//   age: 18,
//   job: 'Student',
//   hobbies: ['Singing', 'running', 'coding'],
//   address: {
//     street: '172 Phu Dien Str',
//     city: 'Hanoi',
//     country: 'Vietnam',
//   }
// }
//  for (const property in person.address) {
//   console.log(person.address[property]);
//  };

class Person{
  
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);

    }
}

class Address{

  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person('Vincent Nguyen', 18,
   '172 Phu Dien Str',
   'Hanoi',
   'Vietnam',);

console.log(person1);