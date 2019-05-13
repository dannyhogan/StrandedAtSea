import api from '../services/api.js';
import makeProfile from '../make-profile.js';
import createQuestLink from './create-quest-links.js';
// import createCompletedQuest from './create-completed-quest.js';

const quests = api.getQuests();
const vessel = api.getVessel();
const boatImage = document.getElementById('boat');
boatImage.src = '/assets/boats/' + vessel.type + '.png';

//Parent element for quest links
const questLinks = document.getElementById('quests');

for(let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    
    let dom = createQuestLink(quest)
    if(vessel.completed[quest.id]) {
        dom.style.pointerEvents = 'none';
        dom.style.opacity = '.5';
    }
    questLinks.append(dom);

}

makeProfile();