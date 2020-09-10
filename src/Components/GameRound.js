import React from 'react';
import { Button} from 'react-bootstrap';

import carte from './../img/carte2.png';

import './../css/carte.css'

const GameRound = ({word, nbEquipes, teamTurn, duringGame, startGameRound, 
    prepsGameRound, passWord, time, score, gameRound}) => (
    <div>
        <h2>Game Round {gameRound}</h2>
        {(duringGame === 0) &&
            <Button onClick={() => startGameRound()} >
                Team {teamTurn} commence
            </Button>
        }
        {(duringGame === 1) &&
            <div>
                <div className="carte-container">
                    <img className="carte" src={carte} />
                    <h1 className="word">{word}</h1>
                </div>
                <Button onClick={() => passWord(0)}>❌</Button>
                <Button onClick={() => passWord(1)}>✅</Button>
                <div>{time}</div>
            </div>
        }
        {(duringGame === 2) &&
            <div>
                <h3>Round {gameRound} fini</h3>
                <h2>Score :</h2>
                <div>Team 1 : {score[1]}</div>
                <div>Team 2 : {score[2]}</div>
                {(nbEquipes > 2) && <div>Team 3 : {score[3]}</div>}
                {(nbEquipes > 3) && <div>Team 4 : {score[4]}</div>}
                {(gameRound < 3) && <Button onClick={() => prepsGameRound()}>Round Suivant</Button>}
            </div>
        }
    </div>
)

export default GameRound