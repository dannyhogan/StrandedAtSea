function createCompletedQuest(quest) {
    const p = document.createElement('p');
    p.classList.add('completed');
    p.classList.add('quest');
    p.textContent = quest.title;

    return p;
}

export default createCompletedQuest;