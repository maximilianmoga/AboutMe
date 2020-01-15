import compareNumbers from './isyes1.js';

//lisen for a click when pressing the go button


//grabbing elements form html, dom.
const GO = document.getElementById ('GO')
const total = document.getElementById ('total');
const userInput = document.getElementById ('enter-guess');
const submitButton = document.getElementById ('guessbutton');
const resultDisplay = document.getElementById ('result-display');
const triesDisplay = document.getElementById ('tries-display');
const tempContainer = document.getElementById ('tempnumber')

let tries = 4;
let correctNumber = 16;

submitButton.addEventListener('click', () => {
    console.log('GO');

 //const compareNumbers = pandabears(userInput.value,correctNumber);  

//added the messages I want the site to disply if the answer is correct or wrong.
if (compareNumbers(Number(userInput.value), correctNumber) === -1) {
    tempContainer.textContent = 'too low';
    tempContainer.classList.remove('hidden');
}
if (compareNumbers(Number(userInput.value), correctNumber) === 1) {
    tempDisplay.textContent = 'too high';
    tempContainer.classList.remove('hidden');
}
if (compareNumbers(Number(userInput.value), correctNumber) === 0) {
     tempDisplay.textContent = 'correct';
     tempContainer.classList.remove('hidden');
    resultContainer.classList.remove('hidden');
     submitButton.disabled = true;  
}

total.textContent = name + ',you guessed' + count + 'correct';

});





   


 

    


    

