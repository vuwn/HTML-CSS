// sort()


const person = [{name: 'John', age: 30, gpa: 3.5}, 
                {name: 'Karis', age: 25, gpa: 2.2}, 
                {name: 'Mia', age: 28, gpa: 4.0},
                {name: 'Alex', age: 22, gpa: 3.8}, 
                {name: 'Emily', age: 27, gpa: 3.0}];

// Sort by name
// person.sort((a, b) => a.name.localeCompare(b.name));

// Sort by age
person.sort((a, b) => a.age - b.age);
 
// sort by gpa
person.sort((a, b) => a.gpa - b.gpa);
console.log(person);