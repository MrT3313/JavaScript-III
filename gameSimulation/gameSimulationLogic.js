
//**// GAME LOGIC
// -D- // Create GAME OBJECT
    // -1- // Function
        const makeGame = function (var1, var2, var3) {
        //    gameType: var1, stadium: var2, weather: var3, activeTeams: {homeTeam: '', awayTeam: ''}, activeRosters: {homeTeamRoster: [],awayTeamRoster: []}
        }
    
    // -2- // Set Variables
        var1 = 'simulation' // gameType
        var2 = 'Fenway' // stadium
        var3 = 'Snow' // weather

    // -3- // Call Function
        // -- // -- // Function currently not working
        const todaysGame = new GameObject({
            gameType: 'simulation', stadium: 'Fenway', weather: 'Snow'
        });  
// -- ** -- ** -- END






// -E-// DRAFT TEAMS
    // -1- // MAP Necessary Arrays
    let draftTeamsArray = leagueTeams.map((team) => {
        return team;
    })
    // -2- // Call Function
    draftTeams(todaysGame, draftTeamsArray)

// -F- // DRAFT PLAYERS
    // -1- // MAP Necessary Arrays
    let draftPlayersArray = leaguePlayers.map((player) => {
        return player
    });

    // -2- // SET VARIABLES
        //  maxPitchers = 1;
        //  maxInfielders = 2;
        //  maxOutfielders = 3;

    // -3- // DRAFT PITCHERS
        // -3.1- // -- Filter Pitchers
        let draftPitcherArray = draftPlayersArray.filter(player => player.position === 'pitcher')
        // -3.2- // -- // CALL FUNCTION
        draftPitchers (todaysGame, draftPitcherArray);

    // -4- // DRAFT INFIELDERS
        // -4.1- // -- Filter Infielders
        let draftInfieldArray = draftPlayersArray.filter(player => player.position === 'infield')
        // -4.2- // Call Function
        draftInfielders (todaysGame, draftInfieldArray);
    // -5- // DRAFT OUTFIELDERS
        // -5.1- // -- Filter Outfielders
        let draftOutfieldArray = draftPlayersArray.filter(player => player.position === 'outfield')
        // -5.2- // Call Function
        draftOutfielders (todaysGame, draftOutfieldArray);
        









// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- 
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- 
// START GAME LOGIC
// FIRST PITCH AND BUILD UP by backfilling arrays
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- 
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- 
    
//**// Create ENVIRONMENT For First Pitch
// Everything BELOW the game object will be the the 'ACTIVE' version meanind only made ONCE then pushed into other arrasy
// -- // CREATE HalfInningObject
    const ACTIVE_halfInning = new HalfInningObject ({})
    console.log(ACTIVE_halfInning)

// -- // CREAT AtBatObject
    const atBat_1 = new AtBatObject({})
    
    // Set Active Batter
    ACTIVE_halfInning.atBatsArray[0].activeBatter = ACTIVE_halfInning.atBatsArray[0].FINDactiveBatter('top',homeBattingOrderIndex, awayBattingOrderIndex)
        console.log(ACTIVE_halfInning.atBatsArray[0].activeBatter)
    // Set Active Pitcher
    ACTIVE_halfInning.atBatsArray[0].activePitcher = ACTIVE_halfInning.atBatsArray[0].FINDactivePitcher('top')
        console.log(ACTIVE_halfInning.atBatsArray[0].activePitcher)
    // Set Active Skill
    ACTIVE_halfInning.avgFielderSkill = ACTIVE_halfInning.atBatsArray[0].FINDavgFielderSkill('top')
        console.log(ACTIVE_halfInning.avgFielderSkill )

// -- // CREATE PITCH
    const pitchA1_1 = new PitchObject({})  
    // batter max power
    console.log(ACTIVE_halfInning.atBatsArray[0].activeBatter.power)
    // batter active Power
    ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].activePower = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].FINDactivePower(    ACTIVE_halfInning.atBatsArray[0].activeBatter.power )
    
    // pitcher max power
    console.log(ACTIVE_halfInning.atBatsArray[0].activePitcher.speed)
    // pitcher Active Power
    ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].activeSpeed = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].FINDactiveSpeed(    ACTIVE_halfInning.atBatsArray[0].activePitcher.speed )

    // -- // Pitch Result
    ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].pitchResult =  ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].FINDpitchResult(   ACTIVE_halfInning.atBatsArray[0].activePitcher.speed, ACTIVE_halfInning.atBatsArray[0].activeBatter.power   )
    // -- // -- // Push PitchResult

    // -- // -- // Update PitchCounter
