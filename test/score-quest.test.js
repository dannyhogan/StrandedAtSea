import scoreQuest from '../src/quest/score-quest.js';
const test = QUnit.test;

QUnit.module('score quest tests for each stat');

const quest = {
    id: 'island'
};

test('determines gas based off choice', assert => {
    //act
    const vessel = {
        gas: 100,
        hp: 100,
        confidence: 0,
        completed: {
            'island': true
        }
    };

    const choice = {
        gas: -50,
        hp: 0,
        confidence: 0,
        completed: {
            'island': true
        }
    };

    const expected = {
        gas: 50,
        hp: 100,
        confidence: 0,
        completed: {
            'island': true
        }
    };

    //arrange
    const result = scoreQuest(vessel, choice, quest);

    //assert
    assert.deepEqual(result, expected);
});

test('determines hp based off choice', assert => {
    //act
    const vessel = {
        hp: 10,
        gas: 20,
        confidence: 0,
        completed: {
            'island': true
        }
    };

    const choice = {
        hp: -5,
        gas: 10,
        confidence: 0,
        completed: {
            'island': true
        }
    };

    const expected = {
        hp: 5,
        gas: 30,
        confidence: 0,
        completed: {
            'island': true
        }
    };

    //arrange
    const result = scoreQuest(vessel, choice, quest);

    //assert
    assert.deepEqual(result, expected);
});

test('determines confidence based off choice', assert => {
    //act
    const vessel = {
        confidence: 0,
        gas: 0,
        hp: 10,
        completed: {
            'island': true
        }
    };

    const choice = {
        confidence: 10,
        gas: 0,
        hp: 10,
        completed: {
            'island': true
        }
    };

    const expected = {
        confidence: 10,
        gas: 0,
        hp: 20,
        completed: {
            'island': true
        }
    };

    //arrange
    const result = scoreQuest(vessel, choice, quest);

    //assert
    assert.deepEqual(result, expected);
});