
//**// GAME LOGIC
// -1- // Create GAME OBJECT
    const todaysGame = new GameObject({
        gameType: 'simulation', stadium: 'Fenway', weather: 'Snow'
    });  
// -- ** -- ** -- END

// -2-// DRAFT TEAMS
    // -2.1- // MAP Necessary Arrays
    let draftTeamsArray = leagueTeams.map((team) => {
        return team;
    })
    // -2.2- // Call Function
    draftTeams(todaysGame, draftTeamsArray)
// -- ** -- ** -- END

// -3- // DRAFT PLAYERS
    // -- // MAP Necessary Arrays
    let draftPlayersArray = leaguePlayers.map((player) => {
        return player
    });
    // -3.1- // DRAFT PITCHERS
        // -- // -- Filter Pitchers
        let draftPitcherArray = draftPlayersArray.filter(player => player.position === 'pitcher')
        // -- // -- CALL FUNCTION
        draftPitchers (todaysGame, draftPitcherArray);

    // -3.2- // DRAFT INFIELDERS
        // -- // -- Filter Infielders
        let draftInfieldArray = draftPlayersArray.filter(player => player.position === 'infield')
        // -- // -- Call Function
        draftInfielders (todaysGame, draftInfieldArray);
    // -3.3- // DRAFT OUTFIELDERS
        // -- // -- Filter Outfielders
        let draftOutfieldArray = draftPlayersArray.filter(player => player.position === 'outfield')
        // -- // -- Call Function
        draftOutfielders (todaysGame, draftOutfieldArray);
// -- ** -- ** -- END 

// -4- // CREATE HalfInningObject
    const ACTIVE_halfInning = new HalfInningObject ({})
// -- ** -- ** -- END 

// -5- // CREATE AtBatObject
    const ACTIVE_atBat = new AtBatObject({})
// -- ** -- ** -- END 

// -5.1- // CREATE activeBatter
    ACTIVE_halfInning.atBatsArray[0].activeBatter = ACTIVE_halfInning.atBatsArray[0].FINDactiveBatter('top',homeBattingOrderIndex, awayBattingOrderIndex)
// -- ** -- ** -- END 

// -5.2- // CREATE activePitcher
    ACTIVE_halfInning.atBatsArray[0].activePitcher = ACTIVE_halfInning.atBatsArray[0].FINDactivePitcher('top')
// -- ** -- ** -- END 

// -5.3- // CREATE activePitcher
    ACTIVE_halfInning.avgFielderSkill = ACTIVE_halfInning.atBatsArray[0].FINDavgFielderSkill('top')
// -- ** -- ** -- END 

// -6- // CREATE PitchObject
    let ACTIVE_pitch = new PitchObject({})  
// -- ** -- ** -- END 

// -6.1- // Active Power
    ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].activePower = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].FINDactivePower(    ACTIVE_halfInning.atBatsArray[0].activeBatter.power )
    let Apower = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].activePower
    // -- ** -- ** -- END 

// -6.2- // Active Speed
    ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].activeSpeed = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].FINDactiveSpeed(    ACTIVE_halfInning.atBatsArray[0].activePitcher.speed )
    let Aspeed = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].activeSpeed
    // -- ** -- ** -- END 

// -6.3- // Pitch Result
    ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].pitchResult =  ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].FINDpitchResult(   ACTIVE_halfInning.atBatsArray[0].activePitcher.speed, ACTIVE_halfInning.atBatsArray[0].activeBatter.power   )
    let Presult = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].pitchResult
// -- ** -- ** -- END 

// -7- // Update PitchCount
    let Pcounter = ACTIVE_halfInning.atBatsArray[0].pitchCount 
    todaysGame.updatePitchCount(Pcounter, Presult)
// -- ** -- ** -- END 

// -8- // New Pitch
    ACTIVE_pitch = new PitchObject({})  
// -- ** -- ** -- END 
