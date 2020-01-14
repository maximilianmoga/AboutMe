import isYes from './isYes.js';
const quizbutton = document.getElementById('quizbutton')
const total = document.getElementById('total')
quizbutton.addEventListener('click', () => {
console.log('test')

const test = confirm('are you sure you wanna take the test?')
const name = prompt('what\'s your name');
const answer1 = prompt('has max visited italy?');
const answer2 = prompt('has max been to Germany?');
const answer3 = prompt('has max got his associates in automotive?');
let count = 0
if (isYes(answer1)) count +=1;
if (!isYes(answer2)) count +=1;
if (isYes(answer3)) count +=1;

total.textContent = name + ',you got' + count + 'correct';    

})