// eventListener = Listens to specific events to create a interactive web pages
//                 events: click, mouseover, mouseout, keydown,..
// .addEventLister()


const myBox = document.getElementById('myBox');
const myButton = document.getElementById('myButton');

myButton.addEventListener("click", event => {
myBox.style.backgroundColor = 'tomato';
myBox.textContent = 'Ouch';
});

myButton.addEventListener("mouseover", event => {
myBox.style.backgroundColor = 'yellow';
myBox.textContent = 'Do not do it';
});

myButton.addEventListener("mouseout", event => {
myBox.style.backgroundColor = 'green';
myBox.textContent = 'Click me';
});
