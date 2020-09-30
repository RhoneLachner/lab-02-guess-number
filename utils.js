//exporting to main js file to use with other functions, or in other files. 
//created function called compareNumbers to compare two variables. 
export function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) {
        return 0;
    }
    if (guess < correctNumber) {
        return -1;
    }
    if (guess > correctNumber) {
        return 1;
    }

}

//-1 - the guessed number is too low
//1 - the guessed number is too high
