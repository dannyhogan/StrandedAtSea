import api from '../services/api.js';
import makeProfile from '../make-profile.js';
import createQuestLink from './create-quest-links.js';
// import createCompletedQuest from './create-completed-quest.js';

const quests = api.getQuests();

//Parent element for quest links
const questLinks = document.getElementById('quests');

for(let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    const questLink = createQuestLink(quest);
    questLinks.append(questLink);
}
makeProfile();