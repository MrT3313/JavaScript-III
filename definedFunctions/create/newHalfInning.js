//**// CREATE HalfInningObject
    const newHalfInning = function () {
        let ACTIVE_halfInning = new HalfInningObject ({})
        return ACTIVE_halfInning
    }

//**// Setup Inning
const inningSetup = function (inningNumber) {
    if (inningNumber === 18) {
        // GAME OVER
        console.log('game OVER')
    } else {
        newHalfInning() 
    }
}
