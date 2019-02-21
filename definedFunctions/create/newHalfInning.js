//**// Setup Inning
const inningSetup = function () {
    let inningNumber = todaysGame.innings.length

        let inningTitle = ''
        let ACTIVE_BO = undefined
        const awayBO = todaysGame.awayBattingOrder()
        const homeBO = todaysGame.homeBattingOrder()

        console.log(awayBattingOrderIndex)
        console.log(homeBattingOrderIndex)
    
    if (inningNumber !== 18) {
        if (inningNumber % 2 === 0) {
            inningTitle = 'TOP'
            ACTIVE_BO = awayBO
        } else {
            inningTitle = 'BOTTOM'
            ACTIVE_BO = homeBO
        }
        newHalfInning(inningTitle, ACTIVE_BO)
    } else {
        console.log('GAME OVER')
    }

}

//**// CREATE HalfInningObject
const newHalfInning = function (inningTitle, ACTIVE_BO) {
    let ACTIVE_halfInning = new HalfInningObject ({
        inningTitle: inningTitle,
        ACTIVE_BO: ACTIVE_BO,
    })
    return ACTIVE_halfInning
}