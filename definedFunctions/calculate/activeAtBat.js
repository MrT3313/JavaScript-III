//**// activeAtBat
function activeAtBat(battingOrderIndex, ACTIVE_inningTitle, ACTIVE_halfInning) {

    if (ACTIVE_inningTitle === 'TOP') {
        let ACTIVE_battingOrderIndex = battingOrderIndex
    } else {

    }
    debugger 
    // -- // activeBatter
    ACTIVE_halfInning.atBatsArray[0].activeBatter = ACTIVE_halfInning.atBatsArray[0].FINDactiveBatter(inningTitle, battingOrderIndex)
    
    // -- // activeBatter
        
    // // -- // activePitcher
    //     ACTIVE_halfInning.atBatsArray[0].activePitcher = 
    //         ACTIVE_halfInning.atBatsArray[0].FINDactivePitcher(inningTitle)
    // // -- // avg fielder skill
    //     ACTIVE_halfInning.atBatsArray[0].avgFielderSkill = 
    //         ACTIVE_halfInning.atBatsArray[0].FINDavgFielderSkill(inningTitle)
}
// -- ** -- ** -- END