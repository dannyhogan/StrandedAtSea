import hasCompletedAllQuests from '../src/map/has-completed-all-quests.js';
const test = QUnit.test;

test('returns true if the user has completed all tests', assert => {
    //arrange
    const vessel = {
        completed : {
            'island': true,
            'lighthouse': true,
            'sharks': true
        }
    }

    const quests = ['island', 'lighthouse', 'sharks'];

    const expected = true;
    //act
    const result = hasCompletedAllQuests(vessel, quests);
       
    //assert
    assert.equal(result, expected);
});

test('returns false if the user has not completed all tests', assert => {
    //arrange
    const vessel = {
        completed : {
            'island': true,
            'lighthouse': true,
        }
    };

    const quests = ['island', 'lighthouse', 'sharks'];

    const expected = false;
    //act
    const result = hasCompletedAllQuests(vessel, quests);
       
    //assert
    assert.equal(result, expected);
});