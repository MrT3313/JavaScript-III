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

    updatePitchCount (ACTIVE_pitchCount, pitchResult) {
        console.log('--from updatePitchCount--')
        console.log(ACTIVE_pitchCount)
        console.log(pitchResult)
        
        if (pitchResult === 'ball') {
            ACTIVE_pitchCount.balls += 1

        } else if (pitchResult === 'strike') {
            ACTIVE_pitchCount.strikes += 1

        } else if (pitchResult === 'hit') {
            // Call Hit Method
        }
        return ACTIVE_pitchCount      
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
        this.inningTitle = halfInningAttributes.inningTitle;
        this.ACTIVE_BO = halfInningAttributes.ACTIVE_BO;
        this.atBatsArray = [];
        this.baserunners = [];
        this.outs = {   outs: 0   }
        
        // PUSH INTO GAME OBJECT
        todaysGame.innings.unshift(this)
    }   
}

// -3- // AtBatObject
class AtBatObject /* extends HalfInningObject */ {
    constructor(atBatAttributes) {
        // super(atBatAttributes);
    // -- // AtBatObject ATTRIBUTES
        this.homeBOindex = undefined;
        this.awayBOindex = undefined;
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
        if (topBTMbool === 'TOP') {
            let activePitcherArray = todaysGame.activeRosters.homeRoster.filter(player => player.position == 'pitcher')
            return activePitcherArray[0]; // each team only has one pitcher
        } else {
            let activePitcherArray = todaysGame.activeRosters.awayRoster.filter(player => player.position == 'pitcher')
            return activePitcherArray[0]; // each team only hae one pitcher
        }  
    }

    FINDactiveBatter (topBTMbool, battingOrderIndex) {
        if (topBTMbool === 'TOP') {
            let activeBatterArray = todaysGame.awayBattingOrder()
            //console.log(activeBatterArray[awayBattingOrderIndex])
            return activeBatterArray[battingOrderIndex]
        } else {
            let activeBatterArray = todaysGame.homeBattingOrder()
            //console.log(activeBatterArray[homeBattingOrderIndex])
            return activeBatterArray[battingOrderIndex]
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
        // -- DEBUG PITCHCOUNTER & STOPPING AN AT BAT
        // this.activePower = 0
        return this.activePower
    }

    FINDpitchResult (ActiveSpeed,ActivePower) {
        if (this.activeSpeed < .40) {
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