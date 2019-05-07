const test = QUnit.test;

api.storage = sessionStorage;

const api = {
    storage: localStorage,
    saveVessel(vessel) {
        const json = JSON.stringify(vessel);
        api.storage.setItem('vessel', json)
    },
    getVessel() {
        const json = api.storage.getItem('vessel');
        const vessel = JSON.parse(json);
        return vessel;
    }
};

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