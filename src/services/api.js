import questData from './quest-data.js';

const api = {
    storage: localStorage,
    saveVessel(vessel) {
        const json = JSON.stringify(vessel);
        api.storage.setItem('vessel', json);
    },
    getVessel() {
        const json = api.storage.getItem('vessel');
        const vessel = JSON.parse(json);
        return vessel;
    },
    getQuests() {
        return questData;
    },
    getQuestById(id) {
        const quests = questData;
        for(let i = 0; i < quests.length; i++) {
            const quest = quests[i];
            if(id === quest.id) {
                return quest;
            }
        }
    }
};

export default api;