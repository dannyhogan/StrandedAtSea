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

function createQuestLink(quest) {
    const link = document.createElement('a');
    link.classList.add('quest');

    const searchParams = new URLSearchParams();
    searchParams.set('id', quest.id);
    link.href = 'quest.html?' + searchParams.toString();

    link.textContent = quest.title;
    return link;
}