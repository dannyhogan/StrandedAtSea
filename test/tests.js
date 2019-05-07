const test = QUnit.test;

function getVessel(formData) {
    const vessel = {
        type: formData.get('type'),
        name: formData.get('name'),
        hp: '100',
        gas: '100',
        confidence: '100'
    };
    return vessel;
}

test('creates a new vessel object based off formdata', assert => {
    //arrange
    const formData = new FormData();
    formData.set('type', 'coast-guard');
    formData.set('name', 'SS Save Lance');

    const expected = {
        type: 'coast-guard',
        name: 'SS Save Lance',
        hp: '100',
        gas: '100',
        confidence: '100'
    };
    //act
    const result = getVessel(formData)
    
    //assert
    assert.deepEqual(expected, result);
});