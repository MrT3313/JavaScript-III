const gameType = 'simulation'
const stadium = 'fenway'
const weather = 'snow'

const newGame = function(gameType, stadium, weather) {
    let todaysGame = new GameObject({
        gameType: gameType,
        stadium: stadium,
        weather: weather,
    })
    return todaysGame
}