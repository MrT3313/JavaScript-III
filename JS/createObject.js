// notes:
    // -- // PITCHER does not know about PLAYER 
    // -- // BATTER does not know about PLAYER 
    // -- // FIELDER does not know about PLAYER 

    // -- // -- // TO DO --> introduce them
    PitcherObject.prototype = Object.create(PlayerObject.prototype);
    BatterObject.prototype = Object.create(PlayerObject.prototype);
    FielderObject.prototype = Object.create(PlayerObject.prototype);

//**// Create Game
const todaysGame = new GameObject({
    date: new Date(),
    stadium: 'fenway',
    weather: 'snow'
});

//**// Create Teams
// -- // Team 1
    const RedSox = new TeamObject({
        teamName: 'RedSox',
        city: 'Boston',
    });

// -- // Team 2
    const Yankees = new TeamObject({
        teamName: 'Yankees',
        city: 'New York',
    });

//**// Create Players
    // Create Array of Players
        const playersArray = [];

    // -- // Player 1
    const player1 = new PlayerObject({
        playerName: 'Babe',
        playerLastName: 'Ruth',
        jerseyNum: 3,
        position: 'pitcher',

        // event threshold attributes
        speed: .8,
        power: .7,
        skill: .8
    });

    // -- // Player 2
    const player2 = new PlayerObject({
        playerName: 'Barry',
        playerLastName: 'Bonds',
        jerseyNum: 25,
        position: 'outfield',

        // event threshold attributes
        speed: .2,
        power: .9,
        skill: .7
    });

    // -- // Player 3
    const player3 = new PlayerObject({
        playerName: 'David',
        playerLastName: 'Ortiz',
        jerseyNum: 34,
        position: 'infield',

        // event threshold attributes
        speed: .4,
        power: .8,
        skill: .6
    });

    // -- // Player 4
    const player4 = new PlayerObject({
        playerName: 'Jason',
        playerLastName: 'Varitek',
        jerseyNum: 33,
        position: 'infield',

        // event threshold attributes
        speed: .5,
        power: .7,
        skill: .5
    });

    // -- // Player 5
    const player5 = new PlayerObject({
        playerName: 'Derek',
        playerLastName: 'Jeter',
        jerseyNum: 2,
        position: 'infield',

        // event threshold attributes
        speed: .8,
        power: .6,
        skill: .9
    });

    // -- // Player 6
    const player6 = new PlayerObject({
        playerName: 'Reed',
        playerLastName: 'Turgeon',
        jerseyNum: 13,
        position: 'infield',

        // event threshold attributes
        speed: .6,
        power: .5,
        skill: .5
    });

    // -- // Player 7
    const player7 = new PlayerObject({
        playerName: 'Manny',
        playerLastName: 'Ramirez',
        jerseyNum: 24,
        position: 'outfield',

        // event threshold attributes
        speed: .6,
        power: .8,
        skill: .6
    });

    // -- // Player 8
    const player8 = new PlayerObject({
        playerName: 'Ted',
        playerLastName: 'Williams',
        jerseyNum: 9,
        position: 'outfield',

        // event threshold attributes
        speed: .7,
        power: .7,
        skill: .5
    });

    // -- // Player 9
    const player9 = new PlayerObject({
        playerName: 'Mike',
        playerLastName: 'Trout',
        jerseyNum: 27,
        position: 'outfield',

        // event threshold attributes
        speed: .8,
        power: .8,
        skill: .8
    });

    // -- // Player 10
    const player10 = new PlayerObject({
        playerName: 'Bryce',
        playerLastName: 'Harper',
        jerseyNum: 34,
        position: 'outfield',

        // event threshold attributes
        speed: .8,
        power: .8,
        skill: .8
    });

    // -- // Player 11
    const player11 = new PlayerObject({
        playerName: 'Mascot',
        jerseyNum: 00,
        position: 'outfield',

        // event threshold attributes
        speed: .2,
        power: .1,
        skill: .1
    });

    // -- // Player 12
    const player12 = new PlayerObject({
        playerName: 'Bat-Boy',
        jerseyNum: -5,
        position: 'outfield',

        // event threshold attributes
        speed: .1,
        power: .1,
        skill: .1
    });
