
// Nodelist 

let buttons = document.querySelectorAll('.myButton');
console.log(buttons);



// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato"
//     })
// })

    buttons.forEach(button => {
        button.addEventListener('mouseover', event => {
            event.target.style.backgroundColor = 'hsl(193, 73%, 40%)'
        })
    })

    buttons.forEach(button => {
        button.addEventListener('mouseout', event => {
            event.target.style.backgroundColor = 'hsl(193, 73%, 50%)'
        })
    })

// ADD A ELEMENT;

    let newButton = document.createElement('button');
    newButton.textContent = "Button 5";
    newButton.classList = "myButton";
    document.body.appendChild(newButton);
    buttons = document.querySelectorAll('.myButton');
    console.log(buttons);
    
// REMOVE A ELEMENT
// Node list will not update automatically reflect changes
    buttons.forEach(button => {
        button.addEventListener("click", event => {
            event.target.remove();
            buttons = document.querySelectorAll('.myButton');
            console.log(buttons);
        })
    })