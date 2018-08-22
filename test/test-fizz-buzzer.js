// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should be a number', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [-5, 0, 3, 5, 9, 15, 20, 30];
    // for each set of inputs (a, b), `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if num is not a number', function() {
    // range of bad inputs which aren't numbers
    const badInputs = ['a', 'b', 'c'];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});