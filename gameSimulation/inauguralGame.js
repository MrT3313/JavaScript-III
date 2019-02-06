// Call PlayBall function
let todaysGame = newGame(gameType, stadium, weather)
    console.log('--TODAYS GAME!--')
    console.log(todaysGame)

// Draft Teams
    draftTeams(todaysGame)
    console.log('--Teams Drafted--')
    console.log(todaysGame)

// Draft Players
    draftPlayers()
    console.log('--Players Drafted--')
    console.log(todaysGame)

// Inning Setup
    let inningNumber = todaysGame.innings.length
    inningSetup(inningNumber)
    ACTIVE_halfInning = todaysGame.innings[0]

// At Bat Setup
    console.log('--At Bat Setup--')
    atBatSetup(ACTIVE_halfInning)
    console.log(ACTIVE_halfInning.atBatsArray)

// pitchLOOP
    console.log(todaysGame.innings[0].atBatsArray[0].pitchCount.balls)
    console.log(todaysGame.innings[0].atBatsArray[0].pitchCount.strikes)
    // // -- WHILE LOOP -- //
        // do {
        //         console.log('--PITCH LOOP--')
        //         pitchLoop(ACTIVE_halfInning)
        // } while (
        //         ACTIVE_halfInning.atBatsArray[0].pitchCount.balls !== 4 ||
        //         ACTIVE_halfInning.atBatsArray[0].pitchCount.strikes !== 3 || 
        //         ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].pitchResult !== 'hit'
        // )

    // -- Manual Loop -- //
        console.log('--PITCH LOOP--')
        pitchLoop(ACTIVE_halfInning)
            // console.log(todaysGame.innings[0].atBatsArray[0].pitchCount.balls)
            // console.log(todaysGame.innings[0].atBatsArray[0].pitchCount.strikes)

        console.log('--PITCH LOOP--')
        pitchLoop(ACTIVE_halfInning)
            console.log(todaysGame.innings[0].atBatsArray[0].pitchCount.balls)
            console.log(todaysGame.innings[0].atBatsArray[0].pitchCount.strikes)

        // console.log('--PITCH LOOP--')
        // pitchLoop(ACTIVE_halfInning)
        //     console.log(todaysGame.innings[0].atBatsArray[0].pitchCount.balls)
        //     console.log(todaysGame.innings[0].atBatsArray[0].pitchCount.strikes)

        // console.log('--PITCH LOOP--')
        // pitchLoop(ACTIVE_halfInning)
        //     console.log(todaysGame.innings[0].atBatsArray[0].pitchCount.balls)
        //     console.log(todaysGame.innings[0].atBatsArray[0].pitchCount.strikes)



    console.log(todaysGame)