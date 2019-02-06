// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- **
//**// TEAM + PLAYER OBJECT CONSTRUCTOR
// -- ** -- ** -- ** -- ** -- ** -- ** -- ** -- **
// -1- // Team Object
class TeamObject {
    constructor (teamAttributes) {
        this.teamName = teamAttributes.teamName;
        this.city = teamAttributes.city;
        this.rosterMax = 6;
        // this.rosterArray = teamAttributes.rosterArray;
        leagueTeams.push(this);
    }
}

// -2- // PlayerObject
class PlayerObject {
    constructor (playerAttributes) {
        this.playerName = playerAttributes.playerName;
        this.playerLastName = playerAttributes.playerLastName;
        this.jerseyNum = playerAttributes.jerseyNum;
        this.position = playerAttributes.position;
        this.speed = playerAttributes.speed;
        this.power = playerAttributes.power;
        this.skill = playerAttributes.skill;
        leaguePlayers.push(this);
    }
}

