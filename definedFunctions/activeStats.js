//**// activeStats
function activeStats (ACTIVE_halfInning) {
    // -- // Active Power
    ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].activePower = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].FINDactivePower(    ACTIVE_halfInning.atBatsArray[0].activeBatter.power )
    let Apower = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].activePower
    // -- // Active Speed
    ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].activeSpeed = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].FINDactiveSpeed(    ACTIVE_halfInning.atBatsArray[0].activePitcher.speed )
    let Aspeed = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].activeSpeed
    // -- // Pitch Result
    ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].pitchResult =  ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].FINDpitchResult(   ACTIVE_halfInning.atBatsArray[0].activePitcher.speed, ACTIVE_halfInning.atBatsArray[0].activeBatter.power   )
    let Presult = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].pitchResult
    return Presult
}
// -- ** -- ** -- END