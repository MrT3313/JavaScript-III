//**// PLAY BALL
function playBall(gameType,stadium,weather) {

    return todaysGame
}

// ** // draftTeams
function draftTeams(gameObject) {
    let draftTeamsArray = leagueTeams.map((team) => {
        return team;
    })
    gameObject.activeTeams.homeTeam = draftTeamsArray[Math.floor(Math.random() * draftTeamsArray.length)];        
        // remove homeTeam from draftTeamsArray
        draftTeamsArray.splice(draftTeamsArray.indexOf(gameObject.activeTeams.homeTeam),1);
        //console.log(draftTeamsArray.length);
    
    // set away team & add to GameObject AciveTeams
    //console.log(draftTeamsArray.length) 
    gameObject.activeTeams.awayTeam = draftTeamsArray[Math.floor(Math.random() * draftTeamsArray.length)];
        // remove homeTeam from draftTeamsArray
        draftTeamsArray.splice(draftTeamsArray.indexOf(gameObject.activeTeams.awayTeam),1);
        //console.log(draftTeamsArray.length) 
}
// -- ** -- ** -- END

//**// draftPlayers
function draftPlayers () {
    let draftPlayersArray = leaguePlayers.map((player) => {
        return player
    });
    // -1- // draftPitchers
        let draftPitcherArray = draftPlayersArray.filter(player => player.position === 'pitcher')
        draftPitchers (todaysGame, draftPitcherArray);
    // -2- // draftInfielders
        let draftInfieldArray = draftPlayersArray.filter(player => player.position === 'infield')
        draftInfielders (todaysGame, draftInfieldArray);
    // -3- // draftOutfielders
        let draftOutfieldArray = draftPlayersArray.filter(player => player.position === 'outfield')
        draftOutfielders (todaysGame, draftOutfieldArray);
}

// ** // draftPitchers
    function draftPitchers (gameObject, pitchersArray) {
        let counter = 0
        while ( 
            counter < 1
            // todaysGame.activeTeams.homeRoster !== todaysGame.activeTeams.homeTeam.rosterMax && 
            // todaysGame.activeTeams.homeRoster !== todaysGame.activeTeams.awayTeam.rosterMax     
        )
        {
            // -- // HOME Team Selection
            let chosenPlayerHOME = pitchersArray[Math.floor(Math.random() * pitchersArray.length)];
                //console.log(chosenPlayerHOME)

                // push player onto FRONT of array
                //console.log(gameObject)
                gameObject.activeRosters.homeRoster.unshift(chosenPlayerHOME)
                //console.log(gameObject.activeRosters.homeRoster.length);

                // remove player from pitchersArray
                pitchersArray.splice(pitchersArray.indexOf(gameObject.activeRosters.homeRoster[0]),1)
                    //console.log(pitchersArray.length)
            
            // -- // AWAY Team Selection
            let chosenPlayerAWAY = pitchersArray[Math.floor(Math.random() * pitchersArray.length)];
                //console.log(chosenPlayerAWAY)

                // push player onto FRONT of array
                gameObject.activeRosters.awayRoster.unshift(chosenPlayerAWAY)
                //console.log(gameObject.activeRosters.awayRoster.length);
            
                // remove player from pitchersArray
                pitchersArray.splice(pitchersArray.indexOf(gameObject.activeRosters.awayRoster[0]),1)
                    //console.log(pitchersArray.length)
            // -- // Increment Counter
            counter
            ++counter
            counter
        }
    };   
// -- ** -- ** -- END
// ** // draftInfielders
    function draftInfielders (gameObject, infieldersArray) {
        let counter = 0
        while ( 
            counter < 2
            // todaysGame.activeTeams.homeRoster !== todaysGame.activeTeams.homeTeam.rosterMax && 
            // todaysGame.activeTeams.homeRoster !== todaysGame.activeTeams.awayTeam.rosterMax     
        )
        {
            // -- // HOME Team Selection
            let chosenPlayerHOME = infieldersArray[Math.floor(Math.random() * infieldersArray.length)];
                //console.log(chosenPlayerHOME)

                // push player onto FRONT of array
                gameObject.activeRosters.homeRoster.unshift(chosenPlayerHOME)
                //console.log(gameObject.activeRosters.homeRoster.length);

                // remove player from infieldersArray
                infieldersArray.splice(infieldersArray.indexOf(gameObject.activeRosters.homeRoster[0]),1)
                    //console.log(infieldersArray.length)
            
            // -- // AWAY Team Selection
            let chosenPlayerAWAY = infieldersArray[Math.floor(Math.random() * infieldersArray.length)];
                //console.log(chosenPlayerAWAY)

                // push player onto FRONT of array
                gameObject.activeRosters.awayRoster.unshift(chosenPlayerAWAY)
                //console.log(gameObject.activeRosters.awayRoster.length);
            
                // remove player from infieldersArray
                infieldersArray.splice(infieldersArray.indexOf(gameObject.activeRosters.awayRoster[0]),1)
                    //console.log(infieldersArray.length)
            // -- // Increment Counter
            ++counter
        }
    }
// -- ** -- ** -- END
// ** // draftInfielders
    function draftOutfielders (gameObject, draftOutfieldArray) {
        let counter = 0
        while ( 
            counter < 3
            // todaysGame.activeTeams.homeRoster !== todaysGame.activeTeams.homeTeam.rosterMax && 
            // todaysGame.activeTeams.homeRoster !== todaysGame.activeTeams.awayTeam.rosterMax     
        )
        {
            // -- // HOME Team Selection
            let chosenPlayerHOME = draftOutfieldArray[Math.floor(Math.random() * draftOutfieldArray.length)];
                //console.log(chosenPlayerHOME)

                // push player onto FRONT of array
                gameObject.activeRosters.homeRoster.unshift(chosenPlayerHOME)
                //console.log(gameObject.activeRosters.homeRoster.length);

                // remove player from draftOutfieldArray
                draftOutfieldArray.splice(draftOutfieldArray.indexOf(gameObject.activeRosters.homeRoster[0]),1)
                    //console.log(draftOutfieldArray.length)
            
            // -- // AWAY Team Selection
            let chosenPlayerAWAY = draftOutfieldArray[Math.floor(Math.random() * draftOutfieldArray.length)];
                //console.log(chosenPlayerAWAY)

                // push player onto FRONT of array
                gameObject.activeRosters.awayRoster.unshift(chosenPlayerAWAY)
                //console.log(gameObject.activeRosters.awayRoster.length);
            
                // remove player from draftOutfieldArray
                draftOutfieldArray.splice(draftOutfieldArray.indexOf(gameObject.activeRosters.awayRoster[0]),1)
                    //console.log(draftOutfieldArray.length)
            // -- // Increment Counter
            ++counter
        }
    }; 
// -- ** -- ** -- END
//**// activeAtBat
function activeAtBat() {
    // -- // activeBatter
        ACTIVE_halfInning.atBatsArray[0].activeBatter = ACTIVE_halfInning.atBatsArray[0].FINDactiveBatter('top',homeBattingOrderIndex, awayBattingOrderIndex)
    // -- // activePitcher
        ACTIVE_halfInning.atBatsArray[0].activePitcher = ACTIVE_halfInning.atBatsArray[0].FINDactivePitcher('top')
    // -- // activePitcher
        ACTIVE_halfInning.avgFielderSkill = ACTIVE_halfInning.atBatsArray[0].FINDavgFielderSkill('top')
}
// -- ** -- ** -- END
//**// activeStats
function activeStats (ACTIVE_halfInning) {
    // -- // Active Power
    ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].activePower = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].FINDactivePower(    ACTIVE_halfInning.atBatsArray[0].activeBatter.power )
    let Apower = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].activePower
    // -- // Active Speed
    ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].activeSpeed = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].FINDactiveSpeed(    ACTIVE_halfInning.atBatsArray[0].activePitcher.speed )
    let Aspeed = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].activeSpeed
    // -- // Pitch Result
    ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].pitchResult =  ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].FINDpitchResult(   ACTIVE_halfInning.atBatsArray[0].activePitcher.speed, ACTIVE_halfInning.atBatsArray[0].activeBatter.power   )
    let Presult = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].pitchResult
    return [Apower, Aspeed, Presult]
}

//**// newPitch
function runNewPitch (ACTIVE_halfInning) {
    // -1- // CREATE PitchObject ** FIRST USAGE = ONLY DECLARATION
    let ACTIVE_pitch = new PitchObject({}) ; 
    // -2- // CALCULATE active Stats & pitch result
    activeStats(ACTIVE_halfInning)
    // -3- // UpdatePitchCount
    if (Presult !== 'HIT') {
        todaysGame.updatePitchCount(Pcounter, Presult)
    }
}