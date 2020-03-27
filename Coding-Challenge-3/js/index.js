function checkNumber() {
    let myNumber = document.querySelector('fizzBuzzNumber');
    console.log(myNumber.value);
    if(number(myNumber) > 0) {
        console.log("Valid");
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