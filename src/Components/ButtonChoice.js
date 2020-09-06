import React from 'react';
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'

const ButtonChoice = ({onClick}) => (
    <div>
        <p>Mode de jeu :</p>
        <Button onClick={() => onClick(1)} >Un ordinateur</Button>
        <Button onClick={() => onClick(2)} >Multijoueur</Button>
    </div>
)

export default ButtonChoice