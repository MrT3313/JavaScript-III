// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- **
//**// GAME EVENT CONSTRUCTORS
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- **
// -1- // GameObject
class GameObject {
    constructor (gameAttributes) {
    // -- // GameObject ATTRIBUTES
        this.date = new Date();
        this.gameType = gameAttributes.gameType;
        this.stadium = gameAttributes.stadium;
        this.weather = gameAttributes.weather;
        this.activeTeams    =   {   homeTeam: '', awayTeam: ''  };
        this.activeRosters  =   {   homeRoster: [], awayRoster: []  };
        this.activeOuts = 0;
        this.innings = [];
        

    }
    
    // -- // GameObject METHODS
    homeBattingOrder() {
        return todaysGame.activeRosters.homeRoster.filter(player => player.position !== 'pitcher')
    }

    awayBattingOrder() {
        return todaysGame.activeRosters.awayRoster.filter(player => player.position !== 'pitcher') 
    }

    updatePitchCount (currentPitchCount, pitchResult) {
        if (pitchResult === 'ball') {
            if (currentPitchCount.balls += 1 === 4) {
                currentPitchCount.balls = 0
                currentPitchCount.strikes = 0
                // WALK
            } else {
                currentPitchCount.balls += 1
            }
            
        } else if (pitchResult === 'strike') {
            if (currentPitchCount.strikes += 1 === 3) {
                currentPitchCount.balls = 0
                currentPitchCount.strikes = 0
                // STRIKEOUT
            } else {
                currentPitchCount.strikes += 1
            }

        } else if (pitchResult === 'hit') {
            // Call Hit Method
        }
        console.log(currentPitchCount)
        return currentPitchCount      
    }

    updateOuts (atBatResult) {
        let outsCounter = 0
        if (atBatResult === 'OUT') {
            ++outsCounter
        }
        if (outsCounter === 3) {
            // NEW INNING FUNCTION
        }
    }
}

// -2- // HalfInningObject
class HalfInningObject /* extends GameObject */ {
    constructor (halfInningAttributes) {
        // super(halfInningAttributes);
    // -- // HalfInningObject ATTRIBUTES   
        this.atBatsArray = [];
        this.baserunners = [];
        
        // PUSH INTO GAME OBJECT
        todaysGame.innings.unshift(this)
    }   
}

// -3- // AtBatObject
class AtBatObject /* extends HalfInningObject */ {
    constructor(atBatAttributes) {
        // super(atBatAttributes);
    // -- // AtBatObject ATTRIBUTES
        this.activeBatter = {};
        this.activePitcher = {};
        this.avgFielderSkill = undefined;

        this.pitchCount = {     balls: 0,   strikes: 0      }
        this.pitchesArray = [];
        this.atBatResult = undefined;

        // PUSH INTO INNINGS OBJECT
        todaysGame.innings[0].atBatsArray.unshift(this)

    }
    
    // -- // AtBatObject METHODS
    FINDactivePitcher (topBTMbool) {
        if (topBTMbool === 'top') {
            let activePitcherArray = todaysGame.activeRosters.homeRoster.filter(player => player.position == 'pitcher')
            return activePitcherArray[0]; // each team only has one pitcher
        } else {
            let activePitcherArray = todaysGame.activeRosters.awayRoster.filter(player => player.position == 'pitcher')
            return activePitcherArray[0]; // each team only hae one pitcher
        }  
    }

    FINDactiveBatter (topBTMbool, homeBattingOrderIndex, awayBattingOrderIndex) {
        if (topBTMbool === 'top') {
            let activeBatterArray = todaysGame.awayBattingOrder()
            //console.log(activeBatterArray[awayBattingOrderIndex])
            return activeBatterArray[awayBattingOrderIndex]
        } else {
            let activeBatterArray = todaysGame.homeBattingOrder()
            //console.log(activeBatterArray[homeBattingOrderIndex])
            return activeBatterArray[homeBattingOrderIndex]
        } 
    }

    FINDavgFielderSkill (topBTMbool) {
        if (topBTMbool === 'top') {
            let avgSKILL = todaysGame.activeRosters.homeRoster.reduce( (acc, cur) => {
                return (acc + cur.skill) / todaysGame.activeRosters.homeRoster.length
            }, 0)
            avgSKILL
            return avgSKILL
        } else {
            let avgSKILL = todaysGame.activeRosters.awayRoster.reduce( (acc, cur) => {
                return (acc + cur) / todaysGame.activeRosters.awayRoster.length
            }, 0)
            avgSKILL
            return avgSKILL
        }
    }
}

// -4- // Pitch Object
class PitchObject /* extends AtBatObject */  {
    constructor(pitchAttributes) {
        // super(pitchAttributes);
    // -- // PitchObject ATTRIBUTES
        this.activeSpeed = undefined;
        this.activePower = undefined;
        this.pitchResult = undefined;
        todaysGame.innings[0].atBatsArray[0].pitchesArray.unshift(this)
    }

    // -- // PitchObject METHODS
    FINDactiveSpeed (pitcherMaxSpeed) {
        this.activeSpeed = pitcherMaxSpeed * Math.random()
        return this.activeSpeed
    }

    FINDactivePower (batterMaxPower) {
        this.activePower = batterMaxPower * Math.random()
        return this.activePower
    }

    FINDpitchResult (ActiveSpeed,ActivePower) {
        if (this.activeSpeed < .10) {
            let Presult = 'ball';
            return Presult;
        } else if (this.activeSpeed > this.activePower) {
            let Presult = 'strike';
            return Presult;
        } else {
            let Presult = 'hit';
            return Presult;
        }
    }
}