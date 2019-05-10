function scoreQuest(vessel, choice) {
    vessel.gas += choice.gas;
    vessel.hp += choice.hp;
    vessel.confidence += choice.confidence;

    return vessel;
}

export default scoreQuest;