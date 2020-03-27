function checkNumber() {
    let myNumber = document.querySelector('fizzBuzzNumber');
    console.log(myNumber.value);
    if(number(myNumber) > 0) {
    }
}

function watchButton() {
    let submitButton = document.querySelector('#submitBtn');
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        checkNumber();
    });
}

function init() {
    watchButton();
}

init();

//This is what I would have done having more time
/*
Add inner html depending on the number input
Specify 
*/