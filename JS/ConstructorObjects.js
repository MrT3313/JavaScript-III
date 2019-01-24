//**// Objects Needed 
// -- // Pitch
    // -- // Pitcher VS Batter
        // pitcher.speed
            // pitcher.activeSpeed
        // batter.power
            // batter.activePower

    // -- // Batter VS Fielders
        // fieldersArray.avgSkill 

// -- // At Bat
    // activeBatter
    // activePitcher
    // PitchCounter OBJECT
    // pitchesArray []

// -- // 1/2 Inning
    // 1/2 inning name 
    // -- // activeDiamond OBJECT 
        // activeFielders
        // activeBasesArray [0,0,0,0]
    // 1/2inning.outs

// -- // Inning

// -- // Game

//**// CONSTRUCTOR OBJECTS

function PitchObject(pitchAttributes) {
    // activeSpeed
    // activePower

    // METHOD --> pitchResult()
        //      IF          pitchResult = BALL      --> call pitchCountIncrementor(this.pitchResult)
        //      elseIF      pitchResult = STRIKE    --> call pitchCountIncrementor(this.pitchResult)
        //      elseIF      pitchResult = HIT       --> call updateActiveDiamond()
        //                                          --> push PitchObject into AtBatObject.pitchesArray

}

function AtBatObject(atBatAttributes) {
    // activePitcher
    // activeBatter
    // PitchCount = {balls: 0, strikes: 0}
    // pitchesArray = []
    // atBatResult = ''

    // METHOD --> pitchCountIntrementor() 
            // Update Counter 
                //  IF Balls = 4 --> WALK
                //      call updateActiveDiamond(walk)
                //  IF Strikes = 3 --> STRIKEOUT
                //      call updateActiveDiamond(Strikeout)
    
    // METHOD --> updateActiveDiamond()
        // AtBatObject.atBatResult = this.PitchesArray[PitchesArray.length -1].pitchResult
        // push AtBatObject into HalfInning.atBatArray
        // unshift 1 onto activeDiamond 
            // IF array.length >= 5 --> ADD RUN TO BATTING TEAM & delete last item in array

}

function HalfInningObject  (halfInningAttributes) {
    // activeFielders = []
    // atBatArray = []

    // activeDiamond = []

    // METHOD --> avgFielderSkill()
    // METHOD --> currentOuts
        //  IF currentOuts = 3
        //      THEN --> push
}

function GameObject () {
    // date
    // stadium
    // weather
    // homeTeam
    // awayTeam

    // gameInningsArray = []
} 







// ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** --
// REFACTORED ^^^^ 
// ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- ** --


// === GameObject === 
    function GameObject(gameAttributes) {
        // -- // SET INHERITANCE
        PitchCounter.call(this, gameAttributes);
        
        // -- // SET ATTRIBUTES
        this.date = gameAttributes.date;
        this.stadium = gameAttributes.stadium;
        this.weather = gameAttributes.weather;
        this.gameInnings = [];
    }

// -- // === InningObject ===
    function InningObject(inningAttributes) {
        // -- // SET INHERITANCE

        // -- // SET ATTRIBUTES  
        this.inningHalf = 'top'
        this.inning = 0
        this.inningEvents = [];
        
    }    

// === TeamObject === 
    function TeamObject(teamAttributes) {
        this.teamName = teamAttributes.teamName;
        this.city = teamAttributes.city;
        this.rosterMax = 6;
        this.rosterArray = [];
        teams.push(this);

    }

// === PlayerObject ===
    function PlayerObject(playerAttributes) {
        // -- // SET INHERITANCE
        BatterObject.call(this, playerAttributes);
        FielderObject.call(this, playerAttributes);
        PitcherObject.call(this, playerAttributes);
        
        // -- // SET ATTRIBUTES
        this.playerName = playerAttributes.playerName;
        this.playerLastName = playerAttributes.playerLastName;
        this.jerseyNum = playerAttributes.jerseyNum;
        this.position = playerAttributes.position;

        // -- // PUSH NEW PLAYER TO PLAYERS ARRAY
        players.push(this);
    }

// -- // === PitcherObject === 
        function PitcherObject(pitcherAttributes) {
            this.speed = pitcherAttributes.speed;
        }

// -- // === BatterObject ===
        function BatterObject(batterAttributes) {
            this.power = batterAttributes.power;
        }
// -- // === FielderObject === // NOT NEEDED UNTIL PITCHER & BATTER BATTLE!
        // function FielderObject(fielderAttributes) {
        //     this.skill = fielderAttributes.skill;
        // }

// === PitchCounter === 
    function PitchCounter() {
        this.balls = 0;
        this.strikes = 0;
    }

// // === EventObject ===
// function EventObject(eventAttributes) {
//     PlayerObject.call(this, eventAttributes);

//     this.pitcherSpeed = this.Speed;
//     this.batterPower = eventAttributes.batterPower;
//     this.fielderSkill = eventAttributed.fielderSkill;
// }

//**// METHODS
// -- // Regular Methods

// -- // PROTOTYPE Methods
    // -- // Random Number
        GameObject.prototype.randNum = function() { 
            return Math.random()
        }
    // -- // Active Event Data
        GameObject.prototype.activeSpeed = function(speedThreshold) {
            return this.speed * this.randNum
        }

        GameObject.prototype.activePower = function(powerThreshold) {
            return this.power * this.randNum
        }
    
        PitchCounter.prototype.increment = function (bool) {
            if (bool === 'strike') {
                this.strikes += 1 
                if (this.strikes === 3) {
                    return 'STRIKEOUT'
                }
            } else {
                this.balls += 1
                if (this.balls === 4) {
                    return "WALK"
                }
            } 
        }

        GameObject.prototype.createEvent = function (pitcher, batter, fieldersArray) {
            

            //PUSH FINAL result to gameArray
        }




