== CREATE EMPTY ARRAYS ==
    C) leagueTeams          // pool of all created team objects
    D) activeTeams              // what 2 teams are participating in this game?  
    E) leaguePlayers        // pool of all created players
    F) activePlayers            // what players are available 
    
    G) gameArray            // pool of all created Events


== WHOS INVOLVED ==
    A) Create Team Objects >= 2
    B) Create Player Objects >= 12
        >= 2 Pitchers
        >= 4 Infielders
        >= 6 Outfielders

== GAME LOGIC ==
    3) SET DRAFT BOARD
        3.1) *LOGIC* @player constructor function --> players.push()
    4) SET TEAMS FOR GAME DRAFT
        4.1) *LOGIC* @team constructor function --> teams.push()
    5) Draft Teams
        5.1) draft order = teams array order 
        5.2) *LOGIC* do until team1.rosterArray === rosterMax && team2.rosterArray === rosterMax
                *LOGIC* generate random number
                *LOGIC*
                    IF --> random number > .5 
                        THEN --> currentTeam.rosterArray.push(currentPlayer)
                            END IF
                        ELSE --> nextPlayer
                *LOGIC* switch current team
    6) CREATE gameArray
    7) CREATE pitchCount
    7) *LOGIC* call GameObject.createEvent(pitcher, batter, fielders, pitchCount)
        7.1) *LOGIC* call this.activeSpeed
        7.2) *LOGIC* call this.activePower
        7.3) *LOGIC*
                IF pitcher.activeSpeed < 10 
                    THEN    
                        --> BALL
                        --> call PitchCounter.increment(ball)
                    elseIF  
                        --> IF pitcher.activeSpeed < batter.power
                                THEN    --> STRIKE
                                        --> call PitchCounter .increment(strike)
                                ELSE    --> HIT
                




