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

// At Bat Setup

// ***********************
// ***********************
// ***********************
// ***********************
// ***********************
// ***********************
// ***********************
// ***********************
// ***********************


    atBatSetup(todaysGame.innings[0])

    console.log('--Inning Created--')
    console.log(inningNumber)
    console.log(todaysGame.innings)

    console.log(todaysGame.innings[0])



// Calculate Pitch




// Create At Bat
// console.log('--ACTIVE AT BAT--')
//     newAtBat()
//     console.log(todaysGame.innings[0].atBatsArray[0])


