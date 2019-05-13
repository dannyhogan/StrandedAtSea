import questData from '../src/services/quest-data.js';
const test = QUnit.test;

QUnit.module('creats getQuest method in api');

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