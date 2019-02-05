const gameType = 'simulation'
const stadium = 'fenway'
const weather = 'snow'

const playBall = function(gameType, stadium, weather) {
    let todaysGame = new GameObject({
        gameType: gameType,
        stadium: stadium,
        weather: weather,
    })
    return todaysGame
}

let todaysGame = playBall(gameType, stadium, weather)
console.log(todaysGame)