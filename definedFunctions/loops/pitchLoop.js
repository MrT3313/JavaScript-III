const pitchLoop = function (ACTIVE_halfInning) {

    // Create Pitch
    newPitch()

    // Calculate Active Stats
    activeStats(ACTIVE_halfInning)

    // Run Pitch Result Conditional
        let ACTIVE_pitchCount = todaysGame.innings[0].atBatsArray[0].pitchCount
        let pitchResult = todaysGame.innings[0].atBatsArray[0].pitchesArray[0].pitchResult  

        pitchResultConditional(ACTIVE_pitchCount,pitchResult)
        console.log('--from pitchLoop--')
        console.log(ACTIVE_pitchCount)
}