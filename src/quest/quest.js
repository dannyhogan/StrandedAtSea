import api from '../services/api.js';
import createChoice from './createChoice.js';
import makeProfile from '../make-profile.js';

const questTitle = document.getElementById('quest-title');
const choicesParent = document.getElementById('choices-parent');

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = api.getQuestById(questId);

questTitle.textContent = quest.title;

for(let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];
    const choiceHTML = createChoice(choice);
    choicesParent.appendChild(choiceHTML);
}

makeProfile();
