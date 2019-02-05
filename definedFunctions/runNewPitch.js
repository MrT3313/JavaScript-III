//**// newPitch
function runNewPitch (ACTIVE_halfInning) {
    // -1- // CREATE PitchObject ** FIRST USAGE = ONLY DECLARATION
    let ACTIVE_pitch = new PitchObject({}) ; 
    // -2- // CALCULATE active Stats & pitch result
    activeStats(ACTIVE_halfInning)

    console.log(activeStats(ACTIVE_halfInning))

    // -3- // UpdatePitchCount
    if (activeStats(ACTIVE_halfInning) !== 'HIT') {
        todaysGame.updatePitchCount(Pcounter, Presult)
    }
}
// -- ** -- ** -- END