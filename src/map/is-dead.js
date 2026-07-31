function isDead(vessel) {
    if(vessel.hp <= 0) {
        return true;
    } else {
        return false;
    }
}

export default isDead;