const newAtBat = function (ACTIVE_halfInning) {
    let ACTIVE_inningTitle = ACTIVE_halfInning.halfInningTitle 
        console.log(ACTIVE_inningTitle)
    
    // what information do i KNOW BEFORE i create the at bat
        // home & away batting order
            // console.log(homeBattingOrderIndex)
            // const awayBO = todaysGame.awayBattingOrder()
            // const homeBO = todaysGame.homeBattingOrder()
            // console.log(homeBO);
            // console.log(awayBO);
        // home & away batting order INDEX
            console.log(awayBattingOrderIndex)
            console.log(homeBattingOrderIndex)
    
        // pitcher
        // fielders

        if (ACTIVE_inningTitle === 'TOP') {
            let ACTIVE_atBat = new AtBatObject({})
            activeAtBat(awayBattingOrderIndex, ACTIVE_inningTitle, ACTIVE_halfInning)

            if (++awayBattingOrderIndex > awayBO.length) {
                awayBattingOrderIndex = 0;
            } else {
                ++awayBattingOrderIndex;
            }
            
        } else {
            let ACTIVE_atBat = new AtBatObject({})
            activeAtBat(homeBattingOrderIndex, ACTIVE_halfInning)

            if (++homeBattingOrderIndex > homeBO.length) {
                homeBattingOrderIndex = 0;
            } else {
                ++homeBattingOrderIndex;
            }
        }


    

    console.log(homeBattingOrderIndex)
    console.log(awayBattingOrderIndex)

    // debugger
    ACTIVE_halfInning.atBatsArray[0].homeBOindex = homeBattingOrderIndex;
    ACTIVE_halfInning.atBatsArray[0].awayBOindex = awayBattingOrderIndex;
    
    

    

    
    // activeStats (ACTIVE_halfInning)
    
}
