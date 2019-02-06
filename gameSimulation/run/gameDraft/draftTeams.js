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