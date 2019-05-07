function makeVessel(formData) {
    const vessel = {
        type: formData.get('type'),
        name: formData.get('name'),
        hp: '100',
        gas: '100',
        confidence: '100'
    };
    return vessel;
}

export default makeVessel;