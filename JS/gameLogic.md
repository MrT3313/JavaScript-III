== ReadMe == 

    Hello! 

    -This game was inspired by Gabe Samaniego.

    -Baseball Simulation 
        -Leverage inheritance and the inherently nested nature of sports to practice
        JS CLASSES

== STRUCTURAL START ==
    A) *CREATE* leagueTeams @teamObject constructor PUSH leagueTeams                -- array of all available teams
    B) *CREATE* leaguePlayers @playerObject constructor PUSH leaguePlayers          -- array of all available players 
== GAME LOGIC ==
    C) Game Initiation Logic
        IF (gameType === simulation)
            B.1) activeTeams = RedSox / Yankees
        IF (gameType === singlePlayer)
            B.2)    *USER* = homeTeam
                    *USER* = user selects team
                    *SIMULATION* awayTeam = random selection
        IF (gameType === multiPlayer)
            B.3)    rocks / paper / sizzors game --> who is home (w/ first pick) & who is away
    D) Create Todays Game
    E) Draft Teams
    F) Draft Players
        E.1) Filter Pitchers
        E.2) Filter Infielders
        E.3) Filter Outfielders
    G) Create HalfInningObject
        G)  Create AtBatObject
            Batter 1 --> push atBarResult to HalfInningObject.atBatsArray
            Batter n --> push atBarResult to HalfInningObject.atBatsArray
                H) Create PitchObject
                    Pitch 1 --> push pitchResult to AtBatObject.pitchesArray
                            --> call atBatObject.updatePitchCount
                    Pitch n --> push pitchResult to AtBatObject.pitchesArray
                            --> call atBatObject.updatePitchCount
                                --> call AtBatObject.atBatResult





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
                




