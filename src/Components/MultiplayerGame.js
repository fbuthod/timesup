import React from 'react';
import { Button } from 'react-bootstrap';

const MultiplayerGame = ({onClick}) => (
    <div>
        <p>Multiplayer</p>
        <Button onClick={() => onClick(0)} >Accueil</Button>
    </div>
)

export default MultiplayerGame