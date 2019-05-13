import isDead from '../src/map/is-dead.js';
const test = QUnit.test;

QUnit.module('isDead function');

test('returns true if hp is lower or equal to 0', assert => {
    //arrange
    const vessel = {
        hp: 0,
    };

    const expected = true;
    //act
    const result = isDead(vessel);

    //assert
    assert.equal(result, expected);
});

test('returns false if hp is above 0', assert => {
    //arrange
    const vessel = {
        hp: 1
    };

    const expected = false;
    //act
    const result = isDead(vessel);
    //assert
    assert.equal(result, expected);
});

