//**// activeAtBat
function activeAtBat(ACTIVE_halfInning) {
    // -- // activeBatter
        ACTIVE_halfInning.atBatsArray[0].activeBatter = ACTIVE_halfInning.atBatsArray[0].FINDactiveBatter('top',homeBattingOrderIndex, awayBattingOrderIndex)
    // -- // activePitcher
        ACTIVE_halfInning.atBatsArray[0].activePitcher = ACTIVE_halfInning.atBatsArray[0].FINDactivePitcher('top')
    // -- // avg fielder skill
        ACTIVE_halfInning.atBatsArray[0].avgFielderSkill = ACTIVE_halfInning.atBatsArray[0].FINDavgFielderSkill('top')
}
// -- ** -- ** -- END