// IMPORT MODULES under test here:
 import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('compareNumbers returns 0 if guess and number are the same', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess = 3;
    const correctNumber = 3;
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
