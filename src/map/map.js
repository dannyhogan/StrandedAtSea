import api from '../services/api.js';
import makeProfile from '../make-profile.js';
import createQuestLink from './create-quest-links.js';
import isDead from './is-dead.js';
import hasCompletedAllQuests from './has-completed-all-quests.js';

// import createCompletedQuest from './create-completed-quest.js';

const quests = api.getQuests();
const vessel = api.getVessel();

if(isDead(vessel) || hasCompletedAllQuests(vessel, quests)) {
    window.location = 'end.html';
}

const boatImage = document.getElementById('boat');
boatImage.src = '/assets/boats/' + vessel.type + '.png';

//Parent element for quest links
const questLinks = document.getElementById('quests');

for(let i = 0; i < quests.length; i++) {
    const quest = quests[i];
    
    let dom = createQuestLink(quest);
    if(vessel.completed[quest.id]) {
        dom.style.pointerEvents = 'none';
        dom.style.opacity = '.5';
    }
    questLinks.append(dom);

}

makeProfile();