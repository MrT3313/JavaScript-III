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
    console.log('--CREATED NEW ACTIVE HALF INNING--')
    inningSetup(inningNumber)
    ACTIVE_halfInning = todaysGame.innings[0]

// -BATTER 1- //
// At Bat Setup
    console.log('--At Bat Setup--')
    newAtBat(ACTIVE_halfInning)
    console.log(ACTIVE_halfInning.atBatsArray)

// Run At Bat
    runAtBat()

// -BATTER 2- //
// Create New Batter
newAtBat(ACTIVE_halfInning)
console.log(ACTIVE_halfInning.atBatsArray)

// Run At Bat
runAtBat()

    // // At bat result
    // console.log('--AT BAT RESULT--')
    // console.log(ACTIVE_halfInning.atBatsArray[0].atBatResult)







console.log(todaysGame)