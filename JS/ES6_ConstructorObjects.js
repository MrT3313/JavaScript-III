// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- **
//**// STRUCTURAL ARRAYS
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- **
let leagueTeams = [];
let leaguePlayers = [];
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- **
//**// GAME EVENT CONSTRUCTORS
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- **
// -- // Pitch Object
class PitchObject {
    constructor(pitchAttributes) {
        // super(pitchAttributes);

    // -- // PitchObject ATTRIBUTES

    }

    // -- // PitchObject METHODS
    ActiveSpeed (pitcherMaxSpeed) {
        // generate random number
        // get pitcher maxSpeed
    }

    ActivePower (batterMaxPower) {
        // generate
    }

    PitchResult (ActiveSpeed,ActivePower) {
        if (this.activeSpeed < 10) {
            console.log(`BALL -- THIS GUY CAN'T FIND THE PLATE!`)
            return 'BALL'
            // -!!- call METHOD -!!- updatePitchCount
            // -!!- push the ENTIRE Pitch Object into AtBatObject.pitchesArray
        } else if (this.activeSpeed > this.activePower) {
            console.log(`STRIKE`)
            return 'STRIKE'
            // -!!- call METHOD -!!- updatePitchCount
            // -!!- push the ENTIRE Pitch Object into AtBatObject.pitchesArray
        } else {
            console.log(`HIT`)
            // -!!- GO DOWN fielders logic tree
            
            return 'HIT'
            // -!!- call METHOD -!!- updatePitchCount
            // -!!- call METHOD -!!- push 
        }
    }
}

// -- // AtBatObject
class AtBatObject {
    constructor(atBatAttributes) {
        // super(atBatAttributes);
    // -- // AtBatObject ATTRIBUTES
        this.activePitcher = atBatAttributes.activePitcher;
        this.activeBatter = atBatAttributes.activeBatter;
        this.pitchCount = {     balls: 0,   strikes: 0      }
        this.pitchesArray = [];

    }
    
    // -- // AtBatObject METHODS
    updatePitchCount (PitchResult) {
        if (PitchResult === 'BALL') {
            this.pitchCount.balls += 1
        } else if (PitchResult === 'STRIKE') {
            this.pitchCount.strike += 1
        } else {
            // HIT
            // -!!- call METHOD -!!- atBarResult
            // -!!- call METHOD -!!- update baserunners
        }
            
    }
    atBatResult () {

    }
}

// -- // HalfInningObject
class HalfInningObject {
    constructor (halfInningAttributes) {
        //super(halfInningAttributes);
    // -- // HalfInningObject ATTRIBUTES   
        this.fieldersArray = [];
        this.atBatsArray = [];
        this.baserunners = [];
    }

    // -- // HalfInningObject METHODS
    avgFielderSkill () {

    }

    currentOuts () {

    }
}

// -- // GameObject
class GameObject {
    constructor (gameAttributes) {
    // -- // GameObject ATTRIBUTES
        this.date = new Date();
        this.gameType = gameAttributes.gameType;
        this.stadium = gameAttributes.stadium;
        this.weather = gameAttributes.weather;
        this.activeTeams    =   {   homeTeam: '', awayTeam: ''  };
        this.activeRosters  =   {   homeRoster: [], awayRoster: []  };

    }

    // activeTeams () {

    // }

    activeRosters () {

    }

    // -- // HalfInningObject METHODS
    coinToss () {
        // figure out who is home and away
    }
}
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- **
//**// PLAYER OBJECT CONSTRUCTOR
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- **
class PlayerObject {
    constructor (playerAttributes) {
        this.playerName = playerAttributes.playerName;
        this.playerLastName = playerAttributes.playerLastName;
        this.jerseyNum = playerAttributes.jerseyNum;
        this.position = playerAttributes.position;
        this.speed = playerAttributes.speed;
        this.power = playerAttributes.power;
        this.skill = playerAttributes.skill;
        leaguePlayers.push(this);
    }
}

// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- **
//**// TEAM OBJECT CONSTRUCTOR
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- **
class TeamObject {
    constructor (teamAttributes) {
        this.teamName = teamAttributes.teamName;
        this.city = teamAttributes.city;
        this.rosterMax = 6;
        // this.rosterArray = teamAttributes.rosterArray;
        leagueTeams.push(this);
    }
}

// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- **
//**// CREATE TEAM OBJECTS
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- **
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
    // -- // Team 3
    const Cubs = new TeamObject({
        teamName: 'Cubs',
        city: 'Chicago',
    });
    // -- // Team 4
    const Dodgers = new TeamObject({
        teamName: 'Dodgers',
        city: 'LA',
    });
    // console.log(leagueTeams)

// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- **
//**// CREATE PLAYER OBJECTS
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- **
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
    //console.log(player1);

    // -- // Player 2
    const player2 = new PlayerObject({
        playerName: 'Pedro',
        playerLastName: 'Martinez',
        jerseyNum: 25,
        position: 'pitcher',

        // event threshold attributes
        speed: .9,
        power: .6,
        skill: .4
    });
    //console.log(player2);

    // -- // ADD PITCHER
    // const addPITCHER = new PlayerObject({
    //     playerName: 'thisguy',
    //     playerLastName: 'thisguy',
    //     jerseyNum: 89,
    //     position: 'pitcher',

    //     // event threshold attributes
    //     speed: .2,
    //     power: .2,
    //     skill: .2
    // });
    //console.log(player2);

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
    //console.log(player3);

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
    //console.log(player4);

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
    //console.log(player5);

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
    //console.log(player6);

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
    //console.log(player7);

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
    //console.log(player8);

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
    //console.log(player9);

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
    //console.log(player10);

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
    //console.log(player11);

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
    //console.log(player12);
    //console.log(leaguePlayers)
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- **
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** 
//**// GAME LOGIC
// -- // -D- // Create GAME OBJECT
    // -- // Function
        const makeGame = function (var1, var2, var3) {
        //    gameType: var1, stadium: var2, weather: var3, activeTeams: {homeTeam: '', awayTeam: ''}, activeRosters: {homeTeamRoster: [],awayTeamRoster: []}
        }
    
    // -- // Set Variables
        var1 = 'simulation' // gameType
        var2 = 'Fenway' // stadium
        var3 = 'Snow' // weather

    // -- // Call Function
        // -- // -- // Function currently not working
        const todaysGame = new GameObject({
            gameType: 'simulation', stadium: 'Fenway', weather: 'Snow'
        });  

    // -- // Check Function Call
        console.log(todaysGame);
// -- ** -- ** -- END

// -- // -E- // DRAFT TEAMS
    // -- // MAP Necessary Arrays
        let draftTeamsArray = leagueTeams.map((team) => {
            return team;
        })        
        console.log(leagueTeams.length)
        console.log(draftTeamsArray.length)
        draftTeamsArray

    // -- // FUNCTION
        function draftTeams(gameObject, draftArray) {
            // set home team & add to GameObject AciveTeams
            console.log(draftArray.length) 
            gameObject.activeTeams.homeTeam = draftArray[Math.floor(Math.random() * draftArray.length)];        
                // remove homeTeam from draftArray
                draftArray.splice(draftArray.indexOf(gameObject.activeTeams.homeTeam),1);
                console.log(draftArray.length);
            
            // set away team & add to GameObject AciveTeams
            console.log(draftArray.length) 
            gameObject.activeTeams.awayTeam = draftArray[Math.floor(Math.random() * draftArray.length)];
                // remove homeTeam from draftArray
                draftArray.splice(draftArray.indexOf(gameObject.activeTeams.awayTeam),1);
                console.log(draftArray.length) 
        }

    // -- // Call Function
        draftTeams(todaysGame, draftTeamsArray)
    // -- // Check Function Call
        console.log(todaysGame)
        console.log(todaysGame.activeTeams.homeTeam)
        console.log(todaysGame.activeTeams.awayTeam)
// -- ** -- ** -- END

// -- // -F- // DRAFT PLAYERS
        // -- // MAP Necessary Arrays
            let draftPlayersArray = leaguePlayers.map((player) => {
                return player
            });
            console.log(leaguePlayers.length)
            console.log(draftPlayersArray.length)
            draftPlayersArray
    
        // -- // SET VARIABLES
            //  maxPitchers = 1;
            //  maxInfielders = 2;
            //  maxOutfielders = 3;
        
        // -- // FUNCTION
        // -- // -- // DRAFT PITCHERS
        // -- // -- // -- Filter Pitchers
            let draftPitcherArray = draftPlayersArray.filter(player => player.position === 'pitcher')
            console.log(draftPitcherArray.length)

        // -- // -- // -- Function
            function draftPitchers (gameObject, pitchersArray) {
                let counter = 0
                while ( 
                    counter < 1
                    // todaysGame.activeTeams.homeRoster !== todaysGame.activeTeams.homeTeam.rosterMax && 
                    // todaysGame.activeTeams.homeRoster !== todaysGame.activeTeams.awayTeam.rosterMax     
                )
                {
                    // -- // HOME Team Selection
                    let chosenPlayerHOME = pitchersArray[Math.floor(Math.random() * pitchersArray.length)];
                        console.log(chosenPlayerHOME)

                        // push player onto FRONT of array
                        console.log(gameObject)
                        gameObject.activeRosters.homeRoster.unshift(chosenPlayerHOME)
                        console.log(gameObject.activeRosters.homeRoster.length);

                        // remove player from pitchersArray
                        pitchersArray.splice(pitchersArray.indexOf(gameObject.activeRosters.homeRoster[0]),1)
                            console.log(pitchersArray.length)
                    
                    // -- // AWAY Team Selection
                    let chosenPlayerAWAY = pitchersArray[Math.floor(Math.random() * pitchersArray.length)];
                        console.log(chosenPlayerAWAY)

                        // push player onto FRONT of array
                        gameObject.activeRosters.awayRoster.unshift(chosenPlayerAWAY)
                        console.log(gameObject.activeRosters.awayRoster.length);
                    
                        // remove player from pitchersArray
                        pitchersArray.splice(pitchersArray.indexOf(gameObject.activeRosters.awayRoster[0]),1)
                            console.log(pitchersArray.length)
                    // -- // Increment Counter
                    counter
                    ++counter
                    counter
                }
            };   

            // -- // -- // CALL FUNCTION
                draftPitchers (todaysGame, draftPitcherArray);
            // -- // Check Function Call
                console.log(todaysGame.activeRosters.homeRoster)
                console.log(todaysGame.activeRosters.awayRoster)

        // -- // -- // DRAFT INFIELDERS
            // -- // -- // -- Filter Infielders
            let draftInfieldArray = draftPlayersArray.filter(player => player.position === 'infield')
            console.log(draftInfieldArray.length)

            // -- // -- // -- Function
            function draftInfielders (gameObject, infieldersArray) {
                let counter = 0
                while ( 
                    counter < 2
                    // todaysGame.activeTeams.homeRoster !== todaysGame.activeTeams.homeTeam.rosterMax && 
                    // todaysGame.activeTeams.homeRoster !== todaysGame.activeTeams.awayTeam.rosterMax     
                )
                {
                    // -- // HOME Team Selection
                    let chosenPlayerHOME = infieldersArray[Math.floor(Math.random() * infieldersArray.length)];
                        console.log(chosenPlayerHOME)

                        // push player onto FRONT of array
                        gameObject.activeRosters.homeRoster.unshift(chosenPlayerHOME)
                        console.log(gameObject.activeRosters.homeRoster.length);

                        // remove player from infieldersArray
                        infieldersArray.splice(infieldersArray.indexOf(gameObject.activeRosters.homeRoster[0]),1)
                            console.log(infieldersArray.length)
                    
                    // -- // AWAY Team Selection
                    let chosenPlayerAWAY = infieldersArray[Math.floor(Math.random() * infieldersArray.length)];
                        console.log(chosenPlayerAWAY)

                        // push player onto FRONT of array
                        gameObject.activeRosters.awayRoster.unshift(chosenPlayerAWAY)
                        console.log(gameObject.activeRosters.awayRoster.length);
                    
                        // remove player from infieldersArray
                        infieldersArray.splice(infieldersArray.indexOf(gameObject.activeRosters.awayRoster[0]),1)
                            console.log(infieldersArray.length)
                    // -- // Increment Counter
                    ++counter
                }
            }; 
            // -- // -- // CALL FUNCTION
            draftInfielders (todaysGame, draftInfieldArray);
            // -- // Check Function Call
            console.log(todaysGame.activeRosters.homeRoster)
            console.log(todaysGame.activeRosters.awayRoster)
            
        // -- // -- // DRADFT OUTFIELDERS
            // -- // -- // -- Filter Infielders
            let draftOutfieldArray = draftPlayersArray.filter(player => player.position === 'outfield')
            console.log(draftOutfieldArray.length)
            // -- // -- // -- Function
            function draftOutfielders (gameObject, draftOutfieldArray) {
                let counter = 0
                while ( 
                    counter < 3
                    // todaysGame.activeTeams.homeRoster !== todaysGame.activeTeams.homeTeam.rosterMax && 
                    // todaysGame.activeTeams.homeRoster !== todaysGame.activeTeams.awayTeam.rosterMax     
                )
                {
                    // -- // HOME Team Selection
                    let chosenPlayerHOME = draftOutfieldArray[Math.floor(Math.random() * draftOutfieldArray.length)];
                        console.log(chosenPlayerHOME)

                        // push player onto FRONT of array
                        gameObject.activeRosters.homeRoster.unshift(chosenPlayerHOME)
                        console.log(gameObject.activeRosters.homeRoster.length);

                        // remove player from draftOutfieldArray
                        draftOutfieldArray.splice(draftOutfieldArray.indexOf(gameObject.activeRosters.homeRoster[0]),1)
                            console.log(draftOutfieldArray.length)
                    
                    // -- // AWAY Team Selection
                    let chosenPlayerAWAY = draftOutfieldArray[Math.floor(Math.random() * draftOutfieldArray.length)];
                        console.log(chosenPlayerAWAY)

                        // push player onto FRONT of array
                        gameObject.activeRosters.awayRoster.unshift(chosenPlayerAWAY)
                        console.log(gameObject.activeRosters.awayRoster.length);
                    
                        // remove player from draftOutfieldArray
                        draftOutfieldArray.splice(draftOutfieldArray.indexOf(gameObject.activeRosters.awayRoster[0]),1)
                            console.log(draftOutfieldArray.length)
                    // -- // Increment Counter
                    ++counter
                }
            }; 
            // -- // -- // CALL FUNCTION
            draftOutfielders (todaysGame, draftOutfieldArray);
            // -- // Check Function Call
            console.log(todaysGame.activeRosters.homeRoster)
            console.log(todaysGame.activeRosters.awayRoster)   


            console.log(todaysGame);

            // -- ** -- ** -- END   
    

