import api from '../src/services/api.js';
import questData from '../src/services/quest-data.js';
const test = QUnit.test;

api.storage = sessionStorage;

test('creates a new vessel object based off formdata', assert => {
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
    const quests = getQuests();
    //assert
    assert.deepEqual(quests, expected);
});

function getQuests() {
    return questData;
}

