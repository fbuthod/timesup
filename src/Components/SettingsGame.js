import React from 'react';
import { Button } from 'react-bootstrap';

const SettingsGame = ({ getNbEquipes, getNbMots, startGame }) => (
    <div>
        <div>
            Nombre d'équipe de 2 :
            <Button onClick={() => getNbEquipes(2)} >2</Button>
            <Button onClick={() => getNbEquipes(3)} >3</Button>
            <Button onClick={() => getNbEquipes(4)} >4</Button>
        </div>
        <div>
            Nombre de mots :
            <Button onClick={() => getNbMots(20)} >20</Button>
        </div>
        <div>
            <Button onClick={() => startGame()} >Commencer</Button>
        </div>
    </div>
)

export default SettingsGame

