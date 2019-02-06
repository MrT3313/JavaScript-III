const pitchResultConditional = function (ACTIVE_pitchCount,pitchResult) {
    if (pitchResult === 'strike') {
        // Update PitchCounter
        todaysGame.updatePitchCount(ACTIVE_pitchCount, pitchResult)
        
    } else if (pitchResult === 'ball') {
        // Update PitchCounter
        todaysGame.updatePitchCount(ACTIVE_pitchCount, pitchResult)

    } else if (pitchResult === 'hit') {
        // Update PitchCounter
        todaysGame.updatePitchCount(ACTIVE_pitchCount, pitchResult)
    }
    
    return ACTIVE_pitchCount
}