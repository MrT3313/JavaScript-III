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
debugger
// Inning Setup
    console.log('--CREATED NEW ACTIVE HALF INNING--')
    inningSetup()
    
    // Setting ACTIVE half inning
    ACTIVE_halfInning = todaysGame.innings[0]
// -BATTER 1- //
// At Bat Setup
    console.log('--At Bat Setup--')
    newAtBat(ACTIVE_halfInning)
    console.log(ACTIVE_halfInning.atBatsArray)

// Run At Bat
    runAtBat()


// ** // WHERE ARE WE??

console.log(todaysGame)




// -BATTER 2- //
// Create New Batter
// debugger
newAtBat(ACTIVE_halfInning)
console.log(ACTIVE_halfInning.atBatsArray)

// Run At Bat
runAtBat()

    // // At bat result
    // console.log('--AT BAT RESULT--')
    // console.log(ACTIVE_halfInning.atBatsArray[0].atBatResult)







console.log(todaysGame)