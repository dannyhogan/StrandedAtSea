const island = {
    id: 'island',
    title: 'Search a remote island!',
    map: {
        top: '50%',
        left: '50%'
    },
    description: `You see a remote island off in the distance. It doesn't look like much is there - however, you look through your binoculars and notice a cucumber floating near the shore. What do you want to do?`,
    choices: [{
        id: 'search',
        description: `Explore the island! A floating cucumber must mean Lance is nearby!`,
        result: 'Oh no! On your way to the island, you come across a tropical storm! Your boat is intact, but suffered a minor crack in the bow. You lose 20 confidence, 10 gas, and 5 HP.',
        hp: -5,
        gas: -10,
        confidence: -20
    }, {
        id: 'ignore',
        description: `Ignore the island and keep looking for other clues.`,
        result: `Good choice! You start to notice a pretty nasty storm forming inbetween you and the island, probably best that we keep searching! Plus 20 confidence.`,
        hp: 0,
        gas: 0,
        confidence: 20
    }
    , {
        id: 'flare',
        description: `Shoot off a flare gun! Lance might notice the flare and create a smoke signal on the island!`,
        result: `Unfortunately the flare gun you bought missfired. You decide to keep searching other areas. You lose 50 confidence.`,
        hp: 0,
        gas: 0,
        confidence: -50
    }]
};

const island2 = {
    id: 'island2',
    title: 'Search a remote island!',
    map: {
        top: '50%',
        left: '50%'
    },
    description: `You see a remote island off in the distance. It doesn't look like much is there - however, you look through your binoculars and notice a cucumber floating near the shore. What do you want to do?`,
    choices: [{
        id: 'search',
        description: `Explore the island! A floating cucumber must mean Lance is nearby!`,
        result: 'Oh no! On your way to the island, you come across a tropical storm! Your boat is intact, but suffered a minor crack in the bow. You lose 20 confidence, 10 gas, and 5 HP.',
        hp: 0,
        gas: -10,
        confidence: -20
    }, {
        id: 'ignore',
        description: `Ignore the island and keep looking for other clues.`,
        result: `Good choice! You start to notice a pretty nasty storm forming inbetween you and the island, probably best that we keep searching! Plus 20 confidence.`,
        hp: 0,
        gas: 0,
        confidence: 20
    }
    , {
        id: 'flare',
        description: `Shoot off a flare gun! Lance might notice the flare and create a smoke signal on the island!`,
        result: `Unfortunately the flare gun you bought missfired. You decide to keep searching other areas. You lose 50 confidence.`,
        hp: 0,
        gas: 0,
        confidence: -50
    }]
};

const island3 = {
    id: 'island3',
    title: 'Search a remote island!',
    map: {
        top: '50%',
        left: '50%'
    },
    description: `You see a remote island off in the distance. It doesn't look like much is there - however, you look through your binoculars and notice a cucumber floating near the shore. What do you want to do?`,
    choices: [{
        id: 'search',
        description: `Explore the island! A floating cucumber must mean Lance is nearby!`,
        result: 'Oh no! On your way to the island, you come across a tropical storm! Your boat is intact, but suffered a minor crack in the bow. You lose 20 confidence, 10 gas, and 5 HP.',
        hp: 0,
        gas: -10,
        confidence: -20
    }, {
        id: 'ignore',
        description: `Ignore the island and keep looking for other clues.`,
        result: `Good choice! You start to notice a pretty nasty storm forming inbetween you and the island, probably best that we keep searching! Plus 20 confidence.`,
        hp: 0,
        gas: 0,
        confidence: 20
    }
    , {
        id: 'flare',
        description: `Shoot off a flare gun! Lance might notice the flare and create a smoke signal on the island!`,
        result: `Unfortunately the flare gun you bought missfired. You decide to keep searching other areas. You lose 50 confidence.`,
        hp: 0,
        gas: 0,
        confidence: -50
    }]
};

const quests = [island, island2, island3]