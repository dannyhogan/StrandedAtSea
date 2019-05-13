function hasCompletedAllQuests(vessel, quests) {
    for(let i = 0; i < quests.length; i++) {
        let quest = quests[i];
        if(!vessel.completed[quest.id]) {
            return false;
        }
    }
    return true;
}

export default hasCompletedAllQuests;