

// ** // draftTeams
    function draftTeams(gameObject, draftArray) {
        // set home team & add to GameObject AciveTeams
        //console.log(draftArray.length) 
        gameObject.activeTeams.homeTeam = draftArray[Math.floor(Math.random() * draftArray.length)];        
            // remove homeTeam from draftArray
            draftArray.splice(draftArray.indexOf(gameObject.activeTeams.homeTeam),1);
            //console.log(draftArray.length);
        
        // set away team & add to GameObject AciveTeams
        //console.log(draftArray.length) 
        gameObject.activeTeams.awayTeam = draftArray[Math.floor(Math.random() * draftArray.length)];
            // remove homeTeam from draftArray
            draftArray.splice(draftArray.indexOf(gameObject.activeTeams.awayTeam),1);
            //console.log(draftArray.length) 
    }
// -- ** -- ** -- END

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