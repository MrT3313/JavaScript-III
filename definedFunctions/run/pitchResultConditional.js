const pitchResultConditional = function () {
    console.log('--Current Pitch Count--')
    let ACTIVE_pitchCount = todaysGame.innings[0].atBatsArray[0].pitchCount
    console.log(ACTIVE_pitchCount)

    console.log('--Pitch Result--')
    let pitchResult = todaysGame.innings[0].atBatsArray[0].pitchesArray[0].pitchResult  
    console.log(pitchResult)

    if (pitchResult === 'strike') {
        // Update PitchCounter
        todaysGame.updatePitchCount(ACTIVE_pitchCount, pitchResult)
        
    } else if (pitchResult === 'ball') {
        // Update PitchCounter
        todaysGame.updatePitchCount(ACTIVE_pitchCount, pitchResult)

    } else if (pitchResult === 'hit') {
        // CLEAR PitchCounter
    }
    

}