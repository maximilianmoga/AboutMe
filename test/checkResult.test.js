// IMPORT MODULES under test here:
import checkResult from '../../Rock-Paper-Scisors/rockPaperScissor.js'
const test = QUnit.test;

test('win', function(assert) {
    //Arrange
    // Set up your parameters and expectations
const player = 'rock'
const computer = 'scissors'
    //Act 
    // Call the function you're testing and set the result to a const
    const shouldBeWin = checkResult(player, computer)
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(shouldBeWin, 'win');
});
    
test('win', function(assert) {
    const player = 'scissors'
    const computer = 'paper'
    const shouldBeWin = checkResult(player, computer)
    assert.equal(shouldBeWin, 'win')
});

test('win', function(assert) {
    const player = 'scissors'
    const computer = 'rock'
    const shouldBeWin = checkResult(player, computer)
    assert.equal(shouldBeWin, 'win')
});