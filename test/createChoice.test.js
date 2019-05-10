import questData from '../src/services/quest-data.js';
import createChoice from '../src/quest/createChoice.js';
const test = QUnit.test;

QUnit.module('creates each choice in quest form');

test('creates choice input html for a single choice in quest', assert => {
    //arrange
    const expected = `<label>The beach! I could use some relaxation.<input type="radio" class="choice" name="choice" id="beach" value="beach"></label>`;
    const choice = questData[0].choices[0];
    //act
    const result = createChoice(choice);
    // assert
    assert.equal(result.outerHTML, expected);
});