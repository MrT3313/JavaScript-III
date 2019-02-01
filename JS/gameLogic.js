
//**// GAME LOGIC
// -- // -D- // Create GAME OBJECT
    // -- // Function
        const makeGame = function (var1, var2, var3) {
        //    gameType: var1, stadium: var2, weather: var3, activeTeams: {homeTeam: '', awayTeam: ''}, activeRosters: {homeTeamRoster: [],awayTeamRoster: []}
        }
    
    // -- // Set Variables
        var1 = 'simulation' // gameType
        var2 = 'Fenway' // stadium
        var3 = 'Snow' // weather

    // -- // Call Function
        // -- // -- // Function currently not working
        const todaysGame = new GameObject({
            gameType: 'simulation', stadium: 'Fenway', weather: 'Snow'
        });  

    // -- // Check Function Call
        console.log(todaysGame);
// -- ** -- ** -- END

// -- // -E- // DRAFT TEAMS
    // -- // MAP Necessary Arrays
        let draftTeamsArray = leagueTeams.map((team) => {
            return team;
        })        
        console.log(leagueTeams.length)
        console.log(draftTeamsArray.length)
        draftTeamsArray

    // -- // FUNCTION
        function draftTeams(gameObject, draftArray) {
            // set home team & add to GameObject AciveTeams
            console.log(draftArray.length) 
            gameObject.activeTeams.homeTeam = draftArray[Math.floor(Math.random() * draftArray.length)];        
                // remove homeTeam from draftArray
                draftArray.splice(draftArray.indexOf(gameObject.activeTeams.homeTeam),1);
                console.log(draftArray.length);
            
            // set away team & add to GameObject AciveTeams
            console.log(draftArray.length) 
            gameObject.activeTeams.awayTeam = draftArray[Math.floor(Math.random() * draftArray.length)];
                // remove homeTeam from draftArray
                draftArray.splice(draftArray.indexOf(gameObject.activeTeams.awayTeam),1);
                console.log(draftArray.length) 
        }

    // -- // Call Function
        draftTeams(todaysGame, draftTeamsArray)
    // -- // Check Function Call
        console.log(todaysGame)
        console.log(todaysGame.activeTeams.homeTeam)
        console.log(todaysGame.activeTeams.awayTeam)
// -- ** -- ** -- END

// -- // -F- // DRAFT PLAYERS
    // -- // MAP Necessary Arrays
        let draftPlayersArray = leaguePlayers.map((player) => {
            return player
        });
        console.log(leaguePlayers.length)
        console.log(draftPlayersArray.length)
        draftPlayersArray
    
    // -- // SET VARIABLES
        //  maxPitchers = 1;
        //  maxInfielders = 2;
        //  maxOutfielders = 3;
        
        // -- // FUNCTION
        // -- // -- // DRAFT PITCHERS
        // -- // -- // -- Filter Pitchers
            let draftPitcherArray = draftPlayersArray.filter(player => player.position === 'pitcher')
            console.log(draftPitcherArray.length)

    // -- // -- // -- Function
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
                    console.log(chosenPlayerHOME)

                    // push player onto FRONT of array
                    console.log(gameObject)
                    gameObject.activeRosters.homeRoster.unshift(chosenPlayerHOME)
                    console.log(gameObject.activeRosters.homeRoster.length);

                    // remove player from pitchersArray
                    pitchersArray.splice(pitchersArray.indexOf(gameObject.activeRosters.homeRoster[0]),1)
                        console.log(pitchersArray.length)
                
                // -- // AWAY Team Selection
                let chosenPlayerAWAY = pitchersArray[Math.floor(Math.random() * pitchersArray.length)];
                    console.log(chosenPlayerAWAY)

                    // push player onto FRONT of array
                    gameObject.activeRosters.awayRoster.unshift(chosenPlayerAWAY)
                    console.log(gameObject.activeRosters.awayRoster.length);
                
                    // remove player from pitchersArray
                    pitchersArray.splice(pitchersArray.indexOf(gameObject.activeRosters.awayRoster[0]),1)
                        console.log(pitchersArray.length)
                // -- // Increment Counter
                counter
                ++counter
                counter
            }
        };   

        // -- // -- // CALL FUNCTION
            draftPitchers (todaysGame, draftPitcherArray);
        // -- // -- // CHECK 
            console.log(todaysGame.activeRosters.homeRoster)
            console.log(todaysGame.activeRosters.awayRoster)

        // -- // -- // DRAFT INFIELDERS
            // -- // -- // -- Filter Infielders
            let draftInfieldArray = draftPlayersArray.filter(player => player.position === 'infield')
            console.log(draftInfieldArray.length)

            // -- // -- // -- Function
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
                        console.log(chosenPlayerHOME)

                        // push player onto FRONT of array
                        gameObject.activeRosters.homeRoster.unshift(chosenPlayerHOME)
                        console.log(gameObject.activeRosters.homeRoster.length);

                        // remove player from infieldersArray
                        infieldersArray.splice(infieldersArray.indexOf(gameObject.activeRosters.homeRoster[0]),1)
                            console.log(infieldersArray.length)
                    
                    // -- // AWAY Team Selection
                    let chosenPlayerAWAY = infieldersArray[Math.floor(Math.random() * infieldersArray.length)];
                        console.log(chosenPlayerAWAY)

                        // push player onto FRONT of array
                        gameObject.activeRosters.awayRoster.unshift(chosenPlayerAWAY)
                        console.log(gameObject.activeRosters.awayRoster.length);
                    
                        // remove player from infieldersArray
                        infieldersArray.splice(infieldersArray.indexOf(gameObject.activeRosters.awayRoster[0]),1)
                            console.log(infieldersArray.length)
                    // -- // Increment Counter
                    ++counter
                }
            }; 
            // -- // -- // CALL FUNCTION
            draftInfielders (todaysGame, draftInfieldArray);
            // -- // Check Function Call
            console.log(todaysGame.activeRosters.homeRoster)
            console.log(todaysGame.activeRosters.awayRoster)
            
        // -- // -- // DRADFT OUTFIELDERS
            // -- // -- // -- Filter Infielders
            let draftOutfieldArray = draftPlayersArray.filter(player => player.position === 'outfield')
            console.log(draftOutfieldArray.length)
            // -- // -- // -- Function
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
                        console.log(chosenPlayerHOME)

                        // push player onto FRONT of array
                        gameObject.activeRosters.homeRoster.unshift(chosenPlayerHOME)
                        console.log(gameObject.activeRosters.homeRoster.length);

                        // remove player from draftOutfieldArray
                        draftOutfieldArray.splice(draftOutfieldArray.indexOf(gameObject.activeRosters.homeRoster[0]),1)
                            console.log(draftOutfieldArray.length)
                    
                    // -- // AWAY Team Selection
                    let chosenPlayerAWAY = draftOutfieldArray[Math.floor(Math.random() * draftOutfieldArray.length)];
                        console.log(chosenPlayerAWAY)

                        // push player onto FRONT of array
                        gameObject.activeRosters.awayRoster.unshift(chosenPlayerAWAY)
                        console.log(gameObject.activeRosters.awayRoster.length);
                    
                        // remove player from draftOutfieldArray
                        draftOutfieldArray.splice(draftOutfieldArray.indexOf(gameObject.activeRosters.awayRoster[0]),1)
                            console.log(draftOutfieldArray.length)
                    // -- // Increment Counter
                    ++counter
                }
            }; 
            // -- // -- // CALL FUNCTION
            draftOutfielders (todaysGame, draftOutfieldArray);
            // -- // Check Function Call
            console.log(todaysGame.activeRosters.homeRoster)
            console.log(todaysGame.activeRosters.awayRoster)   

// -- ** -- ** -- END

// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- 
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- 
// START GAME LOGIC
// FIRST PITCH AND BUILD UP by backfilling arrays
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- 
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- 
    
//**// Create ENVIRONMENT For First Pitch
// Everything BELOW the game object will be the the 'ACTIVE' version meanind only made ONCE then pushed into other arrasy
// -- // CREATE HalfInningObject
    const ACTIVE_halfInning = new HalfInningObject ({})
    console.log(ACTIVE_halfInning)

// -- // CREAT AtBatObject
    const atBat_1 = new AtBatObject({})
    
    // Set Active Batter
    ACTIVE_halfInning.atBatsArray[0].activeBatter = ACTIVE_halfInning.atBatsArray[0].FINDactiveBatter('top',homeBattingOrderIndex, awayBattingOrderIndex)
        console.log(ACTIVE_halfInning.atBatsArray[0].activeBatter)
    // Set Active Pitcher
    ACTIVE_halfInning.atBatsArray[0].activePitcher = ACTIVE_halfInning.atBatsArray[0].FINDactivePitcher('top')
        console.log(ACTIVE_halfInning.atBatsArray[0].activePitcher)
    // Set Active Skill
    ACTIVE_halfInning.avgFielderSkill = ACTIVE_halfInning.atBatsArray[0].FINDavgFielderSkill('top')
        console.log(ACTIVE_halfInning.avgFielderSkill )

// -- // CREATE PITCH
    const pitchA1_1 = new PitchObject({})  
    // batter max power
    console.log(ACTIVE_halfInning.atBatsArray[0].activeBatter.power)
    // batter active Power
    ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].activePower = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].FINDactivePower(    ACTIVE_halfInning.atBatsArray[0].activeBatter.power )
    
    // pitcher max power
    console.log(ACTIVE_halfInning.atBatsArray[0].activePitcher.speed)
    // pitcher Active Power
    ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].activeSpeed = ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].FINDactiveSpeed(    ACTIVE_halfInning.atBatsArray[0].activePitcher.speed )

    // -- // Pitch Result
    ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].pitchResult =  ACTIVE_halfInning.atBatsArray[0].pitchesArray[0].FINDpitchResult(   ACTIVE_halfInning.atBatsArray[0].activePitcher.speed, ACTIVE_halfInning.atBatsArray[0].activeBatter.power   )
    // -- // -- // Push PitchResult

    // -- // -- // Update PitchCounter
