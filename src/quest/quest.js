import api from '../services/api.js';
import createChoice from './createChoice.js';
import makeProfile from '../make-profile.js';
import findById from '../find-by-id.js';
import scoreQuest from './score-quest.js';

// Grabs the current quest by ID from searchParams
const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = api.getQuestById(questId);

makeProfile();

// Grabs needed DOM elements on quest page
const questTitle = document.getElementById('quest-title');
const questDescription = document.getElementById('quest-description');
const choicesParent = document.getElementById('choices-parent');
const questForm = document.getElementById('quest-form');

questTitle.textContent = quest.title;
questDescription.textContent = quest.description;

for(let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];
    const choiceHTML = createChoice(choice);
    choicesParent.appendChild(choiceHTML);
}

questForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(questForm);
    const choiceId = formData.get('choice');

    const selectedChoice = findById(quest.choices, choiceId);
    const vessel = api.getVessel();
    const score = scoreQuest(vessel, selectedChoice);
    console.log(score);

});
