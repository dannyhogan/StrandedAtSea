import scoreQuest from '../src/quest/score-quest.js';
const test = QUnit.test;

QUnit.module('score quest tests for each stat');

test('determines gas based off choice', assert => {
    //act
    const vessel = {
        gas: 100,
        hp: 100,
        confidence: 0
    };

    const choice = {
        gas: -50,
        hp: 0,
        confidence: 0
    };

    const expected = {
        gas: 50,
        hp: 100,
        confidence: 0
    };

    //arrange
    const result = scoreQuest(vessel, choice);

    //assert
    assert.deepEqual(result, expected);
});

test('determines hp based off choice', assert => {
    //act
    const vessel = {
        hp: 10,
        gas: 20,
        confidence: 0
    };

    const choice = {
        hp: -5,
        gas: 10,
        confidence: 0
    };

    const expected = {
        hp: 5,
        gas: 30,
        confidence: 0
    };

    //arrange
    const result = scoreQuest(vessel, choice);

    //assert
    assert.deepEqual(result, expected);
});

test('determines confidence based off choice', assert => {
    //act
    const vessel = {
        confidence: 0,
        gas: 0,
        hp: 10
    };

    const choice = {
        confidence: 10,
        gas: 0,
        hp: 10
    };

    const expected = {
        confidence: 10,
        gas: 0,
        hp: 20
    };

    //arrange
    const result = scoreQuest(vessel, choice);

    //assert
    assert.deepEqual(result, expected);
});