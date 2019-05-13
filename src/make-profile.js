import api from './services/api.js';

function makeProfile() {
    const name = document.getElementById('name');
    const vesselLogo = document.getElementById('vessel-logo');
    const hp = document.getElementById('hp');
    const gas = document.getElementById('gas');
    const confidence = document.getElementById('confidence');

    const vessel = api.getVessel();

    name.textContent = '"' + vessel.name + '"';
    vesselLogo.src = '/assets/boaticons/' + vessel.type + '.svg';
    hp.textContent = 'HP: ' + vessel.hp;
    gas.textContent = 'GAS: ' + vessel.gas;
    confidence.textContent = 'CONFIDENCE: ' + vessel.confidence;
}

export default makeProfile;