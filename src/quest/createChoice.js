function createChoice(choice) {
    const label = document.createElement('label');
    const input = document.createElement('input');

    input.type = 'radio';
    input.classList.add('choice');
    input.name = 'choice';
    input.id = choice.id;
    input.value = choice.id;

    label.textContent = choice.description;
    label.appendChild(input);

    return label;
}

export default createChoice;