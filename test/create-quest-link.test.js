import createQuestLink from '../src/map/create-quest-links.js';
const test = QUnit.test;

test('takes a quest object and returns HTML for a quest link that you can append to the list', assert => {
    //arrange
    const quest = {
        id: 'island',
        title: 'Search a remote island!'
    };

    const expected = '<a class="quest" href="quest.html?id=island">Search a remote island!</a>';
    //act
    const result = createQuestLink(quest); 
    //assert
    assert.equal(result.outerHTML, expected);
});