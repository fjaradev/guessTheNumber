//let userName = prompt('What is your name?');
// This initialize a variable with the function to generate a number (see the function defined at the bottom of the code)
let number = generateRandomNumber();
let numberOfAttempts = 1;
startingMessages();
let typedNumbers = []

// This function is activated when the user click on the "Intentar" button and compare the user input with the number generated prevously
function userAttempt() {
    let userInput = parseInt(document.querySelector('input').value);
    // This is an alternative 
    //let userInput = document.getElementById('you have to put this id in the html tag (id="")').value;
    // To compare NaN values we use the isNaN function
    if (isNaN(userInput)) {
        alert('You should type or select a number');
    } else {
        addNumberToList(userInput)
        if (userInput == number) {
            changeText('p', `YOU WIN!🎉🥳\nYou won in ${numberOfAttempts} ${(numberOfAttempts == 1) ? 'attempt' : 'attempts'}`);
            //Since the user has won we need to enable the next button
            document.getElementById('reiniciar').removeAttribute('disabled');
        } 
        else {
            if (userInput > number) {
                changeText('p', 'The number is lower');
            } else {
                changeText('p', 'The number is greater');
            }
            numberOfAttempts++;
            clearBox();
        }
        
    }

    return;
}

function addNumberToList(number) {
    typedNumbers.push(number)
}

function clearBox() {
    document.getElementById('textBox').value = '';
    return;
}

function startingMessages() {
    changeText('h1', 'Welcome to this game.');
    changeText('p', 'Type a number between 1 and 10');
    //changeText('h3', `Hi ${userName}. Welcome to this game.`);
}

function changeText(element, text) {
    let title = document.querySelector(element);
    title.innerHTML = text;
    return;
}

function generateRandomNumber() {
    return parseInt(Math.random()*10)+1;
}

function restartGame() {
    number = generateRandomNumber();
    startingMessages()
    numberOfAttempts = 1;
    clearBox();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

