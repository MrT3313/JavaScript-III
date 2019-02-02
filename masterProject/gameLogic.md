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
1) --> make playBall function
-*USE* GameObject
    -*userFILL* gameType
        -avail --> simulation
        -NOTavail --> singlePlayer
        -NOTavail --> multiPlayer
    -*userFILL* stadium     // like all star or exhibition game
-*CREATE* todaysGame


2) 
-*USE* draftTeams 
    -*UPDATE*- homeTeam
    -*UPDATE*- awayTeam
3)
-*USE* draftPlayers
    -*UPDATE*- homeRoster
    -*UPDATE*- awayRoster

4) 
-*USE* HalfInningObject
-*CREATE* ACTIVE_halfInning

5)
-*USE* AtBatObject
-*CREATE* ACTIVE_atBat

6) 
-*USE* activeAtBat
-*UPDATE* activeBatter
-*UPDATE* activePitcher
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

7) 
Pitch Result Conditional 
-*USE* pitchResultUpdate
-*UPDATE* pitchCounter

8)
-*USE* PitchObject
-*UPDATE* ACTIVE_pitch

9) 
-*USE* activeStats & pitchResult
-*UPDATE* activePower
-*UPDATE* activeSpeed
-*UPDATE* pitchResult

10) 
-*USE* updatePitchCount
-*UPDATE* currentPitchCount

11) -*USE* newPitch
-*CREATE* ACTIVE_pitch

12) 
END OF AT BAT LOGIC

...
.
..
.



