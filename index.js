// element selectors

// document.getElementById() - ELEMENT OR NULL
// const heading = document.getElementById("heading");
  // heading.style.backgroundColor = "yellow"

// document.getElementsByClassName() - HTML COLLECTION
const fruits = document.getElementsByClassName('fruits');
Array.from(fruits).forEach(fruit => {
  fruit.style.backgroundColor = "white"
})

// document.getElementsByTagName() - HTML COLLECTION
// const h4Elements = document.getElementsByTagName('h4');
// Array.from(h4Elements).forEach(h4Element => {
//   h4Element.style.backgroundColor = "white"
// })
// const liElements = document.getElementsByTagName('li');

// Array.from(liElements).forEach(liElement => {
//   liElement.style.backgroundColor = "white"
// })

// document.querySelector() - FIRST ELEMENT OR NULL
// const h4Elements = document.querySelector('li');
// h4Elements.style.backgroundColor = "yellow"

// document.querySelectorAll() - NODELIST
const h4Elements = document.querySelectorAll('li');
h4Elements.forEach(h4Element => {
  h4Element.style.backgroundColor = "yellow"
})
