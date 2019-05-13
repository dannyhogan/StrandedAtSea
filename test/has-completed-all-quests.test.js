import hasCompletedAllQuests from '../src/map/has-completed-all-quests.js';
import api from '../src/services/api.js';

const test = QUnit.test;

const quests = api.getQuests();


test('returns true if the user has completed all tests', assert => {
    //arrange
    const vessel = {
        completed : {
            'island': true,
            'lighthouse': true,
            'sharks': true
        }
    };

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
    
    const expected = false;
    //act
    const result = hasCompletedAllQuests(vessel, quests);
       
    //assert
    assert.equal(result, expected);
});