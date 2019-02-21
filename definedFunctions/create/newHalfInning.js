//**// Setup Inning
const inningSetup = function () {
    let inningNumber = todaysGame.innings.length
    
    if (inningNumber !== 18) {
        if (inningNumber % 2 === 0) {
            console.log('TOP')
            newHalfInning('TOP')

        } else {
            console.log('BOTTOM')
            newHalfInning('BOTTOM')
        }
    } else {
        console.log('GAME OVER')
    }

}

//**// CREATE HalfInningObject
const newHalfInning = function (title) {
    let ACTIVE_halfInning = new HalfInningObject ({
        halfInningTitle: title
    })
    return ACTIVE_halfInning
}