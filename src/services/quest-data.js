const island = {
    id: 'island',
    title: 'Search a remote island!',
    map: {
        top: '40%',
        right: '10%'
    },
    description: `You see a remote island off in the distance. It doesn't look like much is there - however, you look through your binoculars and notice a cucumber floating near the shore. What do you want to do?`,
    choices: [{
        id: 'search',
        description: `Explore the island! A floating cucumber must mean Lance is nearby!`,
        result: 'Oh no! On your way to the island, you come across a tropical storm! Your boat is intact, but suffered a minor crack in the bow. You lose 20 confidence, 20 gas, and 5 HP.',
        hp: -5,
        gas: -20,
        confidence: -20
    }, {
        id: 'ignore',
        description: `Ignore the island and keep looking for other clues.`,
        result: `Good choice! You start to notice a pretty nasty storm forming inbetween you and the island, probably best that we keep searching! Plus 20 confidence. You lose 10 gas.`,
        hp: 0,
        gas: -10,
        confidence: 20
    }
    , {
        id: 'flare',
        description: `Shoot off a flare gun! Lance might notice the flare and create a smoke signal on the island!`,
        result: `Unfortunately the flare gun you bought missfires. You decide to keep searching other areas. You lose 50 confidence and 5 gas.`,
        hp: 0,
        gas: -5,
        confidence: -50
    }]
};

const sharks = {
    id: 'sharks',
    title: 'Search a school of sharks!',
    map: {
        top: '28%',
        right: '3%'
    },
    description: `While searching for Lance, you come across a school of tiger sharks. They seem to be swimming in circles around something, but you can't quite make out what it is. What do you do?`,
    choices: [{
        id: 'search',
        description: `Jump in and search the school of sharks for Lance. He's worth it!`,
        result: 'You throw on your snorkel and hop in the water. You find something terrifying. It appears to be a human leg, and an oar for a small boat. The sharks must be full because they decide to leave you alone. Your ship loses 50 confidence and 15 gas.',
        hp: 0,
        gas: -15,
        confidence: -50
    }, {
        id: 'ignore',
        description: `Ignore the sharks. Finding Lance isn't worth swimming with tiger sharks.`,
        result: `Watch out! As you are leaving the area the sharks' attention shift toward you, and they start attacking your boat! You speed away from the sharks, but your vessel loses 50 HP and 20 gas.`,
        hp: -50,
        gas: -20,
        confidence: 0
    }
    , {
        id: 'harpoon',
        description: `Try to kill the sharks with a harpoon gun, then search the water.`,
        result: `You shoot and kill one of the sharks, however the blood in the water only attracts more of the flesh eating beasts. They start attacking your boat, get out of there! You gain 20 confidence because of your harpoon kill, but your boat loses 25HP and 10 gas.`,
        hp: -25,
        gas: -10,
        confidence: -50
    }]
};

const lighthouse = {
    id: 'lighthouse',
    title: 'Search a lighthouse island in the distance!',
    map: {
        top: '20%'
    },
    description: `More importantly, human civilization!`,
    choices: [{
        id: 'lighthouse',
        description: `Search the lighthouse island for Lance!`,
        result: 'You set anchor on the beach, and start hiking towards the lighthouse. ',
        hp: 0,
        gas: -10,
        confidence: 80
    }, {
        id: '',
        description: ``,
        result: ``,
        hp: 0,
        gas: 0,
        confidence: 20
    }
    , {
        id: 'flare',
        description: `Shoot off a flare gun! Lance might notice the flare and create a smoke signal on the island!`,
        result: `Unfortunately the flare gun you bought missfired. You decide to keep searching other areas andlose 50 confidence.`,
        hp: 0,
        gas: 0,
        confidence: -50
    }]
};

const questData = [lighthouse, island, sharks];

export default questData;