const atBatResult = function (ACTIVE_halfInning, pitchResult, balls, strikes) {
    
    if (pitchResult === 'hit') {
        console.log('ITS A HIT')
        ACTIVE_halfInning.atBatsArray[0].atBatResult = 'hit'

        } else if (balls === 4) {
        console.log('HE WALKED HIM!!!')
        ACTIVE_halfInning.atBatsArray[0].atBatResult = 'walk'

        } else if (strikes === 3) {
        console.log('STRIIIIIKEEEEE OUTTTTTTTT')
        ACTIVE_halfInning.atBatsArray[0].atBatResult = 'strikeout'
        }
}