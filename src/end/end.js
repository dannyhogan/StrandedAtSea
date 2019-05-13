import api from '../services/api.js';

import makeProfile from '../make-profile.js';

makeProfile();

const vessel = api.getVessel();
const boatImage = document.getElementById('boat');
boatImage.src = '/assets/boats/' + vessel.type + '.png';