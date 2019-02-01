== ReadMe == 

    Hello! 

    -This game was inspired by Gabe Samaniego.

    -Baseball Simulation 
        -Leverage inheritance and the inherently nested nature of sports to practice
        JS CLASSES

== -- == -- == -- == -- == 
Structural Start
A) leagueTeams array >= 2
    -*USE* TeamObject
    -*Create* team
B) leaguePlayers array >= 12
    >= 2 pitchers
    >= 4 infielders
    >= 6 outfielders
    -*USE* PlayerObject
    -*CREATE* player

New Game Logic:
1) --> turn into called 'createGame' function
-*USE* GameObject
    -*userFILL* gameType
        -avail --> simulation
        -NOTavail --> singlePlayer
        -NOTavail --> multiPlayer
    -*userFILL* stadium     // like all star or exhibition game
-*CREATE* todaysGame

2) 
-*USE* draftTeams 
    -*LOGIC* draftTeamsArray = leagueTeams.map()
3)
-*USE* draftPlayers
    -*LOGIC* draftPlayersArray = leaguePlayers.map() 
    -draftPitchers
        -*LOGIC* filter 'pitchers'
    -draftOutfielders
        -*LOGIC* filter 'outfielders'
    -draftInfielders
        -*LOGIC* filter 'infielders' 
4) 
-*USE* HalfInningObject
-*CREATE* ACTIVE_halfInning

5)
-*USE* AtBatObject
-*CREATE* ACTIVE_atBat

5-1)
-*USE* FINDactiveBatter
-*UPDATE* activeBatter
5-2)
-*USE* FINDactivePitcher
-*UPDATE* activePitcher
5-3)
-*USE* FINDavgFielderSkill
-*UPDATE* avgFielderSkill

6) 
-*USE* PitchObject
-*CREATE* ACTIVE_pitch

6-1)
-*USE* FINDactivePower
-*UPDATE* activePower
6-2)
-*USE* FINDactiveSpeed
-*UPDATE* activeSpeed
6-3)
-*USE* FINDpitchResult
-*UPDATE* pitchResult

...
.
..
.



