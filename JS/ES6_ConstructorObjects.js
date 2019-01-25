//**// ES6 Constructor Objects
// -- // Pitch Object
    class PitchObject  extends AtBatAtBatObject {
        constructor(pitchAttributes) {
            super(pitchAttributes);

        // -- // PitchObject ATTRIBUTES

        }

        // -- // PitchObject METHODS
        ActiveSpeed (pitcherMaxSpeed) {
            // generate random number
            // get pitcher maxSpeed
        }

        ActivePower (batterMaxPower) {
            // generate
        }

        PitchResult (ActiveSpeed,ActivePower) {
            if (this.activeSpeed < 10) {
                console.log(`BALL -- THIS GUY CAN'T FIND THE PLATE!`)
                return 'BALL'
                // -!!- call METHOD -!!- updatePitchCount
                // -!!- push the ENTIRE Pitch Object into AtBatObject.pitchesArray
            } else if (this.activeSpeed > this.activePower) {
                console.log(`STRIKE`)
                return 'STRIKE'
                // -!!- call METHOD -!!- updatePitchCount
                // -!!- push the ENTIRE Pitch Object into AtBatObject.pitchesArray
            } else {
                console.log(`HIT`)
                // -!!- GO DOWN fielders logic tree
                
                return 'HIT'
                // -!!- call METHOD -!!- updatePitchCount
                // -!!- call METHOD -!!- push 
            }
        }
    }

// -- // -- // TEST PITCH OBJECT


// -- // AtBatObject
class AtBatObject extends HalfInningObject {
    constructor(atBatAttributes) {
        super(atBatAttributes);
    // -- // AtBatObject ATTRIBUTES
        this.activePitcher = atBatAttributes.activePitcher;
        this.activeBatter = atBatAttributes.activeBatter;
        this.pitchCount = {     balls: 0,   strikes: 0      }
        this.pitchesArray = [];

    }
    
    // -- // AtBatObject METHODS
    updatePitchCount (PitchResult) {
        if (PitchResult === 'BALL') {
            this.pitchCount.balls += 1
        } else if (PitchResult === 'STRIKE') {
            this.pitchCount.strike += 1
        } else {
            // HIT
            // -!!- call METHOD -!!- atBarResult
            // -!!- call METHOD -!!- update baserunners
        }
            
    }
    atBatResult () {

    }
}

// -- // HalfInningObject
class HalfInningObject extends GameObject {
    constructor (halfInningAttributes) {
        super(halfInningAttributes);
    // -- // HalfInningObject ATTRIBUTES   
        this.fieldersArray = [];
        this.atBatArray = [];
        this.baserunners = [];
    }

    // -- // HalfInningObject METHODS
    avgFielderSkill () {

    }

    currentOuts () {

    }
}

// -- // GameObject
class GameObject extends GameObject {
    constructor (gameAttributes) {
        super(gameAttributes);
    // -- // GameObject ATTRIBUTES
        this.date = new Date();
        this.stadium = gameAttributes.Stadium;
        this.weather = gameAttributes.weather;

    }

    // -- // HalfInningObject METHODS
    coinToss () {
        // figure out who is home and away
    }
}