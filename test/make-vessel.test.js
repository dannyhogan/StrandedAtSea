import makeVessel from '../src/home/make-vessel.js';

const test = QUnit.test;

QUnit.module('creates vessel object');

test('creates a new vessel object based off formdata', assert => {
    //arrange
    const formData = new FormData();
    formData.set('type', 'coast-guard');
    formData.set('name', 'SS Save Lance');

    const expected = {
        type: 'coast-guard',
        name: 'SS Save Lance',
        hp: 100,
        gas: 100,
        confidence: 100
    };
    //act
    const result = makeVessel(formData);
    
    //assert
    assert.deepEqual(expected, result);
});