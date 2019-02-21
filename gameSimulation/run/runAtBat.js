const runAtBat = function () {
    // -- // Create Variables
    let counter = 0
    let pitchResult = undefined
    let ACTIVE_pitchCount = undefined
    let balls = undefined
    let strikes = undefined

    // -- // Create Do..While Loop
    do {   
        console.log('--PITCH LOOP--')
        pitchLoop(ACTIVE_halfInning)

        pitchResult = todaysGame.innings[0].atBatsArray[0].pitchesArray[0].pitchResult  
        ACTIVE_pitchCount = ACTIVE_halfInning.atBatsArray[0].pitchCount
        todaysGame.updatePitchCount(ACTIVE_pitchCount, pitchResult)

        console.log('--from pitchLoop--')
        console.log(ACTIVE_pitchCount)

        balls = ACTIVE_halfInning.atBatsArray[0].pitchCount.balls
            console.log(balls)
        strikes = ACTIVE_halfInning.atBatsArray[0].pitchCount.strikes 
            console.log(strikes)
        
        ++counter
        // if (counter === 15) {
        //     break
        // }
    } while (
        strikes !== 3 &&
        balls !== 4 &&
        ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].pitchResult !== 'hit'
    );

    atBatResult(ACTIVE_halfInning, pitchResult, balls, strikes)

    // if (pitchResult === 'hit') {
    // console.log('ITS A HIT')
    // } else if (balls === 4) {
    // console.log('HE WALKED HIM!!!')
    // } else if (strikes === 3) {
    // console.log('STRIIIIIKEEEEE OUTTTTTTTT')
    // }


}