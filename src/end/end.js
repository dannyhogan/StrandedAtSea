import api from '../services/api.js';

const vessel = api.getVessel();
const boatImage = document.getElementById('boat');
boatImage.src = '/assets/boats/' + vessel.type + '.png';