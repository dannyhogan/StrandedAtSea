import makeVessel from './make-vessel.js';
import api from '../services/api.js';

const vesselForm = document.getElementById('vessel-form');

vesselForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(vesselForm);
    const vessel = makeVessel(formData);
    api.saveVessel(vessel);
    window.location = 'map.html';
});