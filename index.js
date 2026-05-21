
// classList 

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains


let myButtons = document.querySelectorAll('.myButtons');

myButtons.forEach(button => {
    button.classList.add('enabled');
})

myButtons.forEach(button => {

    button.addEventListener('mouseover', event => {
        event.target.classList.toggle('hover');
    })

})
myButtons.forEach(button => {

    button.addEventListener('mouseout', event => {
        event.target.classList.toggle('hover');
    })
    
})
myButtons.forEach(button => {
    button.addEventListener("click", (event) => {

        if(event.target.classList.contains('disabled')) {
            event.target.textContent += `😡`;
        }
        else {
            event.target.classList.replace('enabled', 'disabled');
        }


    })
})