import api from '../src/services/api.js';
import questData from '../src/services/quest-data.js';
const test = QUnit.test;

QUnit.module('API Test');

api.storage = sessionStorage;

test('getVessel() gets vessel object from API', assert => {
    //arrange
    const vessel = {
        type: 'coast-guard',
        name: 'SS Save Lance',
        hp: '100',
        gas: '100',
        confidence: '100'
    };
    api.saveVessel(vessel);
    //act
    const result = api.getVessel();
    
    //assert
    assert.deepEqual(vessel, result);
});

test('method getQuests returns quests', assert => {
    //arrange
    const expected = questData;
    //act
    const quests = api.getQuests();
    //assert
    assert.deepEqual(quests, expected);
});

test('method getQuestById returns a single quest when given an id', assert => {
    //arrange
    const expectedQuest = questData[0];
    //act
    const result = api.getQuestById(expectedQuest.id);

    //assert
    assert.deepEqual(result, expectedQuest);
});