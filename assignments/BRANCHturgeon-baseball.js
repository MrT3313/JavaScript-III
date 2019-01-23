//**// CONSTRUCTOR OBJECTS
// === GameObject === 
    function GameObject(gameAttributes) {
        // -- // SET INHERITANCE
        teamObject.call(this, playerAttributes);
        
        // -- // SET ATTRIBUTES
        this.date = gameAttributes.date;
        this.stadium = gameAttributes.stadium;
        this.weather = gameAttributes.weather;
    }

// === TeamObject === 
    function TeamObject(teamAttributes) {
        this.teamName = teamAttributes.teamName;
        this.city = teamAttributes.city;
        this.rosterMax = 5;

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
        }


//**// METHODS
// -- // Regular Methods

// -- // PROTOTYPE Methods
    Player.prototype.randNum = function() { 

    }