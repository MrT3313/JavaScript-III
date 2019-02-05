//**// activeAtBat
function activeAtBat() {
    // -- // activeBatter
        ACTIVE_halfInning.atBatsArray[0].activeBatter = ACTIVE_halfInning.atBatsArray[0].FINDactiveBatter('top',homeBattingOrderIndex, awayBattingOrderIndex)
    // -- // activePitcher
        ACTIVE_halfInning.atBatsArray[0].activePitcher = ACTIVE_halfInning.atBatsArray[0].FINDactivePitcher('top')
    // -- // activePitcher
        ACTIVE_halfInning.avgFielderSkill = ACTIVE_halfInning.atBatsArray[0].FINDavgFielderSkill('top')
}
// -- ** -- ** -- END