// IMPORT MODULES under test here:
import isYes from '../isYes.js'

const test = QUnit.test;

test('test it returns false', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    const shouldBeFalse = isYes('no')
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(shouldBeFalse, true);
});
test('test it returns false2', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    const shouldBeFalse = isYes('yes')
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(shouldBeFalse, false);
});
test('test it returns true', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    const shouldBeTrue = isYes('y')
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(shouldBeTrue, true);
});
