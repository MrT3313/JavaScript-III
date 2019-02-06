const pitchLoop = function (ACTIVE_halfInning) {
    // At Bat Setup
    console.log('--At Bat Setup--')
    atBatSetup(ACTIVE_halfInning)
    console.log(ACTIVE_halfInning.atBatsArray)

    // Create Pitch
    console.log('--New Pitch--') 
    newPitch()
    console.log(ACTIVE_halfInning.atBatsArray[0].pitchesArray)

    // Calculate Active Stats
    console.log('--Calculate ACTIVE power & PITCH RESULT--')
    activeStats(ACTIVE_halfInning)
    console.log(ACTIVE_halfInning.atBatsArray[0].pitchesArray[0])

    // Run Pitch Result Conditional
    pitchResultConditional()
}