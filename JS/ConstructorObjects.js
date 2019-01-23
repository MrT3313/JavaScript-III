//**// CONSTRUCTOR OBJECTS
// === GameObject === 
    function GameObject(gameAttributes) {
        // -- // SET INHERITANCE
        // teamObject.call(this, playerAttributes);
        
        // -- // SET ATTRIBUTES
        this.date = gameAttributes.date;
        this.stadium = gameAttributes.stadium;
        this.weather = gameAttributes.weather;
        this.gameLength = gameAttributes.gameLength;
    }

// === TeamObject === 
    function TeamObject(teamAttributes) {
        this.teamName = teamAttributes.teamName;
        this.city = teamAttributes.city;
        this.rosterMax = 6;

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
    }

// -- // === PitcherObject === 
        function PitcherObject(pitcherAttributes) {
            this.speed = pitcherAttributes.speed;
        }

// -- // === BatterObject ===
        function BatterObject(batterAttributes) {
            this.power = batterAttributes.power;
        }
// -- // === FielderObject === 
        function FielderObject(fielderAttributes) {
            this.skill = fielderAttributes.skill;
        }

// === EventObject ===
function EventObject(eventAttributes) {
    PlayerObject.call(this, eventAttributes);

    this.pitcherSpeed = eventAttributes.pitcherSpeed;
    this.batterPower = eventAttributes.batterPower;
    this.fielderSkill = eventAttributed.fielderSkill;
}

//**// METHODS
// -- // Regular Methods

// -- // PROTOTYPE Methods
    EventObject.prototype.randNum = function() { 
        return Math.random()
    }

    EventObject.prototype.activeSpeed = function(speedThreshold) {
        return this.speed * this.randNum
    }

    EventObject.prototype.activePower = function(powerThreshold) {
        return this.power * this.randNum
    }

    EventObject.prototype.activeSkill = function(skillThreshold) {
        return this.skill * this.randNum
    }
