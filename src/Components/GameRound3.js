import React from 'react';
import { Button } from 'react-bootstrap';

const GameRound3 = ({word, nbEquipes, teamTurn, duringGame, startGameRound, 
    printScore, passWord, time, score}) => (
    <div>
        <h2>Game Round 3</h2>
        {(duringGame === 0) &&
            <Button onClick={() => startGameRound()} >
                Team {teamTurn} commence
            </Button>
        }
        {(duringGame === 1) &&
            <div>
                <h3>{word}</h3>
                <Button onClick={() => passWord(0)}>❌</Button>
                <Button onClick={() => passWord(1)}>✅</Button>
                <div>{time}</div>
            </div>
        }
        {(duringGame === 2) &&
            <div>
                <h3>Round 3 fini</h3>
                <h2>Score :</h2>
                <div>Team 1 : {score[1]}</div>
                <div>Team 2 : {score[2]}</div>
                {(nbEquipes > 2) &&<div>Team 3 : {score[3]}</div>}
                {(nbEquipes > 3) &&<div>Team 4 : {score[4]}</div>}
            </div>
        }
    </div>
)

export default GameRound3