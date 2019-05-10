import api from '../services/api.js';
import createChoice from './createChoice.js';
import makeProfile from '../make-profile.js';

const questTitle = document.getElementById('quest-title');
const questDescription = document.getElementById('quest-description');
const choicesParent = document.getElementById('choices-parent');
const questForm = document.getElementById('quest-form');

// Grabs the current quest by ID from searchParams
const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = api.getQuestById(questId);

questTitle.textContent = quest.title;
questDescription.textContent = quest.description;

for(let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];
    const choiceHTML = createChoice(choice);
    choicesParent.appendChild(choiceHTML);
}

makeProfile();

questForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(questForm);
    const choice = formData.get('choice');

    const selectedChoice = quest.choices[choice];
    console.log(selectedChoice);

});
