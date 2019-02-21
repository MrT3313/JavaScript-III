const newAtBat = function (ACTIVE_halfInning) {

    let inningTitle = ACTIVE_halfInning.inningTitle
    console.log(ACTIVE_halfInning.inningTitle)

        if (inningTitle === 'TOP') {
            let ACTIVE_atBat = new AtBatObject({})
            activeAtBat(awayBattingOrderIndex, inningTitle, ACTIVE_halfInning)

            if (+awayBattingOrderIndex > todaysGame.awayBattingOrder().length) {
                awayBattingOrderIndex = 0;
            } else {
                +awayBattingOrderIndex;
            }
            
        } else {
            let ACTIVE_atBat = new AtBatObject({})
            activeAtBat(homeBattingOrderIndex, inningTitle, ACTIVE_halfInning)

            if (+homeBattingOrderIndex > todaysGame.awayBattingOrder().length) {
                homeBattingOrderIndex = 0;
            } else {
                +homeBattingOrderIndex;
            }
        }
}
