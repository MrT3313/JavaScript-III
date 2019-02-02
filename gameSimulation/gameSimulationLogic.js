
//**// GAME LOGIC
// -1- // PLAY BALL!! -- Create todaysGame
    // playBall('simulation','Fenway','Snow')
    // console.log(todaysGame)
    let todaysGame = new GameObject({
        gameType: 'simulation', 
        stadium: 'fenway', 
        weather: 'snow'
    }); 
    console.log(todaysGame)
// -- ** -- ** -- END
// -2- // DRAFT TEAMS
    draftTeams(todaysGame)
// -- ** -- ** -- END

// -3- // DRAFT PLAYERS
    draftPlayers()
// -- ** -- ** -- END 

// -4- // CREATE HalfInningObject
    const ACTIVE_halfInning = new HalfInningObject ({})
// -- ** -- ** -- END

// -5- // CREATE AtBatObject
    const ACTIVE_atBat = new AtBatObject({})
// -- ** -- ** -- END

// -6- // activeAtBat
    activeAtBat()
// -- ** -- ** -- END

//**//**// - PITCH LOOP LOGIC - //**//**//
// -- // -- // -- // -- // -- // -- // 

// -7- // CREATE PitchObject ** FIRST USAGE = ONLY DECLARATION
    let ACTIVE_pitch = new PitchObject({})  
// -- ** -- ** -- END 

// -- // Active Power
    ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].activePower = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].FINDactivePower(    ACTIVE_halfInning.atBatsArray[0].activeBatter.power )
    let Apower = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].activePower
// -- // Active Speed
    ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].activeSpeed = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].FINDactiveSpeed(    ACTIVE_halfInning.atBatsArray[0].activePitcher.speed )
    let Aspeed = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].activeSpeed
// -- // Pitch Result
    ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].pitchResult =  ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].FINDpitchResult(   ACTIVE_halfInning.atBatsArray[0].activePitcher.speed, ACTIVE_halfInning.atBatsArray[0].activeBatter.power   )
    let Presult = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].pitchResult
// -- ** -- ** -- END

// -8- // Update PitchCount
    let Pcounter = ACTIVE_halfInning.atBatsArray[0].pitchCount 
    todaysGame.updatePitchCount(Pcounter, Presult)
// -- ** -- ** -- END 

// -9- // New Pitch
    ACTIVE_pitch = new PitchObject({})  
// -- ** -- ** -- END 

// -10- // find ACTIVE stats for ACTIVE_pitch
    activeStats(ACTIVE_halfInning)
// -- ** -- ** -- END 

// -11- // Update PitchCount
    Pcounter = ACTIVE_halfInning.atBatsArray[0].pitchCount 
    todaysGame.updatePitchCount(Pcounter, Presult)
// -- ** -- ** -- END

// -12- // newPitch()
    runNewPitch(ACTIVE_halfInning)
// -- ** -- ** -- END

// -13- // end of at bat



