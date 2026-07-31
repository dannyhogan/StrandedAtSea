function findById(array, id) {
    for(let i = 0; i < array.length; i++) {
        const quest = array[i];
        if(id === quest.id) {
            return quest;
        }
    }
}

export default findById;