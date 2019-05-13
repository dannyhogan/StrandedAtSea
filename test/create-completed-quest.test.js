import createCompletedQuest from '../src/map/create-completed-quest.js';
const test = QUnit.test;

test('creates html for completed quest', assert => {
    //arrange
    const quest = {
        id: 'island',
        title: 'Search a remote island!'
        
    };

    const expected = '<p class="completed quest">Search a remote island!</p>';
    //act
    const result = createCompletedQuest(quest); 
    //assert
    assert.equal(result.outerHTML, expected);
});