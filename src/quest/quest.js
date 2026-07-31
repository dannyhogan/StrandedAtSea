import api from '../services/api.js';
import createChoice from './create-choice.js';
import makeProfile from '../make-profile.js';
import findById from '../find-by-id.js';
import scoreQuest from './score-quest.js';

// Grabs the current quest by ID from searchParams
const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = api.getQuestById(questId);

// Populates vessel profile
makeProfile();

// Grabs needed DOM elements on quest page
const questTitle = document.getElementById('quest-title');
const questDescription = document.getElementById('quest-description');
const choicesParent = document.getElementById('choices-parent');
const questForm = document.getElementById('quest-form');
const questInfo = document.getElementById('quest-info');
const questResult = document.getElementById('quest-result');
const backToMap = document.getElementById('back-to-map');

questTitle.textContent = quest.title;
questDescription.textContent = quest.description; 

for(let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];
    const choiceHTML = createChoice(choice);
    choicesParent.appendChild(choiceHTML);
}

questForm.addEventListener('submit', event => {
    event.preventDefault();

    // Gets the selected choice from form
    const formData = new FormData(questForm);
    const choiceId = formData.get('choice');
    const selectedChoice = findById(quest.choices, choiceId);

    // Gets vessel object, scores the choice, and saves the scored vessel object back to API
    const vessel = api.getVessel();
    const score = scoreQuest(vessel, selectedChoice, quest);
    api.saveVessel(score);

    // Populates updated vessel profile
    makeProfile();

    // Hides quest form upon user submit
    questInfo.classList.add('hidden');

    //Sets result textContent based off choice, and unhides element
    questResult.textContent = selectedChoice.result;
    questResult.classList.remove('hidden');
    
    document.body.style.background = 'URL(/assets/quests/' + quest.id + '/' + selectedChoice.id + '.png)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.transition = '2s';

    //Unhides back to map button
    backToMap.classList.remove('hidden');
});
