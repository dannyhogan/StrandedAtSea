import questData from './quest-data.js';
import findById from '../find-by-id.js';

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
        return findById(questData, id);
    }
};

export default api;