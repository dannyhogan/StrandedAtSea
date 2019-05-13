function scoreQuest(vessel, choice, quest) {
    vessel.gas += choice.gas;
    vessel.hp += choice.hp;
    vessel.confidence += choice.confidence;
    vessel.completed[quest.id] = true;
    return vessel;
}

export default scoreQuest;