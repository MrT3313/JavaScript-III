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
    console.log(ACTIVE_halfInning)

// pitchLOOP
    console.log('--PITCH LOOP--')
    pitchLoop(ACTIVE_halfInning)
    console.log('--PITCH LOOP--')
    pitchLoop(ACTIVE_halfInning)
