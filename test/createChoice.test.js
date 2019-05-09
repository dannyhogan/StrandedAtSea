import questData from '../src/services/quest-data.js';
import createChoice from '../src/quest/createChoice.js';
const test = QUnit.test;

QUnit.module('creates each choice in quest form');

test('creates choice input html a single choice', assert => {
    //arrange
    const expected = `<label>Explore the island! A floating cucumber must mean Lance is nearby!<input type="radio" class="choice" id="search" value="search"></label>`;
    const choice = questData[0].choices[0];
    //act
    const result = createChoice(choice);
    // assert
    assert.equal(result.outerHTML, expected);
});