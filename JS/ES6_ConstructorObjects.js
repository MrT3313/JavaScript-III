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
        this.activeTeams = gameAttributes.activeTeams;
        this.activeRosters = gameAttributes.activeRosters;
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
        const addPITCHER = new PlayerObject({
            playerName: 'thisguy',
            playerLastName: 'thisguy',
            jerseyNum: 89,
            position: 'pitcher',
    
            // event threshold attributes
            speed: .2,
            power: .2,
            skill: .2
        });
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
    const todaysGame = new GameObject({
        gameType: 'simulation',
        stadium: '',
        weather: '',
        activeTeams: {
            homeTeam: '', // redsox
            awayTeam: '' // yankees
        },
        activeRosters: {
            homeTeamRoster: [],
            awayTeamRoster: []
        }
    });
    console.log(todaysGame);

    // -- // -E- // DRAFT TEAMS
    let draftTeamsArray = leagueTeams.map((team) => {
        return {'teamName': team.teamName, 'city': team.city};
    })

    function draftTeams(todaysGame, draftTeamsArray) {
        // set home team
        todaysGame.activeTeams.homeTeam = draftTeamsArray[Math.round(Math.random() * draftTeamsArray.length)];        
            // remove homeTeam from draftTeamsArray
            draftTeamsArray.splice(draftTeamsArray.indexOf(todaysGame.activeTeams.homeTeam),1);
                console.log(draftTeamsArray);
        // set away team
        todaysGame.activeTeams.awayTeam = draftTeamsArray[Math.round(Math.random() * draftTeamsArray.length)];
            // remove homeTeam from draftTeamsArray
            draftTeamsArray.splice(draftTeamsArray.indexOf(todaysGame.activeTeams.awayTeam),1);
            console.log(draftTeamsArray);
        return draftTeamsArray;
    };    
    // CALL DRAFT FUNCTION
    draftTeams(todaysGame, draftTeamsArray);
    todaysGame
    draftTeamsArray

    // -- // -E- // DRAFT PLAYERS
    let draftPlayersArray = leaguePlayers.map((player) => {
        return {    playerName: player.playerName,
                    playerLastName: player.playerLastName,
                    jerseyNum: player.jerseyNum,
                    position: player.position,
                    speed: player.speed,
                    power: player.power, 
                    skill: player.skill     }
    });
    
    // -- // -- // filter pitchers
        let draftPitcherArray = draftPlayersArray.filter(player => player.position === 'pitcher')
            draftPitcherArray 

    // -- // -- // filter infielders
        let draftInfieldArray = draftPlayersArray.filter(player => player.position === 'infield')
            draftInfieldArray
    
    // -- // -- // filter outfielders
            let draftOutfieldArray = draftPlayersArray.filter(player => player.position === 'outfield')
            draftOutfieldArray
    

            console.log(draftPitcherArray.length)
            console.log(Math.random())
            console.log(draftPitcherArray[Math.round(Math.random() * draftPitcherArray.Length)])

    // -- // -- // -- // DRAFT!

    console.log(todaysGame)


    function draftPlayers(todaysGame, draftPitcherArray) {
        // home team pick
            todaysGame.activeRosters.homeTeamRoster.push(
                draftPitcherArray[Math.round(Math.random() * draftPitcherArray.length)]
            )
    };

    draftPlayers()
    


