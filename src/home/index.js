import makeVessel from './make-vessel.js';

const vesselForm = document.getElementById('vessel-form');

vesselForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(vesselForm);
    const vessel = makeVessel(formData);
    window.location = 'map.html';
    console.log('vessel', vessel);
});