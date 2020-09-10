import React, { Component } from 'react';
import ButtonChoice from './ButtonChoice'
import MultiplayerGame from './MultiplayerGame'
import SoloGame from './SoloGame'
import { Card } from 'react-bootstrap';

import './../css/App.css';

class App extends Component{
  state = {
      choice: 0,
  }

  getChoice = (id) => {
    this.setState({choice: id})
  }

  render() {
    const { choice } = this.state
    return (
      <div className="App">
        <div className="title">
          <Card >
            <Card.Body><h1>Time's up</h1></Card.Body>
          </Card>
        </div>
        <div className="game">
          {(choice === 0) && <ButtonChoice onClick={this.getChoice} />}
          {(choice === 1) && <SoloGame onClick={this.getChoice}/>}
          {(choice === 2) && <MultiplayerGame onClick={this.getChoice}/>}
        </div>
      </div>
    )
  }
}

export default App;
