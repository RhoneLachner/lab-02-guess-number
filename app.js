
import {compareNumbers} from './utils.js';

// import functions and grab DOM elements

const button = document.getElementById('guessButton');
const guessNumRemaining = document.getElementById('numRemaining');
const guess = document.getElementById('guessInput');


const youWin = document.getElementById('printYouWin');
const youLose = document.getElementById('printYouLose');

let tooLow = document.getElementById('guessTooLow');
let tooHigh = document.getElementById('guessTooHigh');

const correctNumber = Math.floor(Math.random() * 20);
console.log(correctNumber);



// initialize state
let attempts = 4;


// set event listeners to update state and DOM

button.addEventListener('click', () => {
    attempts--;
    if (attempts === 0) {
        guessNumRemaining.textContent = 'You have no guesses remaining. Try again!';
    }
    if (attempts === 3) {
        guessNumRemaining.textContent = 'You have three guesses remaining.';
    }
    if (attempts === 2) {
        guessNumRemaining.textContent = 'You have two guesses remaining.';
    }
    if (attempts === 1) {
        guessNumRemaining.textContent = 'You have one guess remaining.';
    }


    //outputHighOrLow.textContent = 

    //printWinOrLose.textContent =

    if (guess.valueAsNumber === correctNumber) {
        youWin.textContent = 'You win!!! The answer is BE EXCELLENT TO EACH OTHER, and PARTY ON DUDE. 🏄‍♀️';
    }
    else if (guess.valueAsNumber !== correctNumber && attempts === 0) {
        youLose.textContent = 'You lost this time, but life will go on.';
    }

    if (guess.valueAsNumber > correctNumber) {
        tooHigh.textContent = 'Too high!';
    }
    else if (guess.valueAsNumber < correctNumber) {
        tooLow.textContent = 'Too low!';
    }

});




