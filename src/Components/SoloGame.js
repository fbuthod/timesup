import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import SettingsGame from './SettingsGame';
import GameRound1 from './GameRound1';
import DICTIONNAIRE from './Dictionnaire';

class SoloGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stepGame: 0,
            nbEquipes: 0,
            nbMots: 0,
            words: [],
            wordsDiscover: [],
            word: '',
            teamTurn: 1,
            duringGame: 0,
            time: -1,
            score: [0, 0, 0, 0, 0],
            gameRound: 0,
        }
    }

    getNbEquipes = (nbEquipes) => {
        this.setState({nbEquipes: nbEquipes})
    }

    getNbMots = (nbMots) => {
        this.setState({nbMots: nbMots})
    }

    getRandomInt (max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    getWords = (nbMots) => {
        var i = 0
        var mot = ''
        var tab = []
        while (i < nbMots){
            mot = DICTIONNAIRE[this.getRandomInt(DICTIONNAIRE.length)]
            if (!(tab.includes(mot))){
                tab.push(mot)
                i++
            }
        }
        return tab
    }

    startGame = () => {
        const { nbMots } = this.state
        const tab = this.getWords(nbMots)
        this.setState({stepGame: 1})
        this.setState({words: tab})
        this.setState({wordsLeft: tab})
    }

    startGameRound1 = () => {
        this.setState({word: this.selectWord()})
        this.setState({duringGame: 1})
        this.setState({time: 5})
    }

    startGameRound2 = () => {
        const words = this.mixWords()
        this.setState({words: words})
        this.setState({wordsDiscover: []})
        this.setState({duringGame: 1})
        this.setState({time: -1})
        this.setState({teamTurn: 2})
        this.setState({stepGame: 2})
    }

    mixWords = () => {
        const { words } = this.state
        const temp = [words.length]
        var i = 0
        var rand = 0
        console.log(temp[2])
        while (i < words.length){
            rand = this.getRandomInt(words.length)
            if (!(temp.includes(words[rand]))){
                temp[i] = words[rand]
                i++
            }
        }
        console.log(temp)
        this.setState({words: temp})
        this.setState({word: temp[0]})
    }

    changeTeam = () => {
        const { teamTurn, nbEquipes } = this.state

        if (teamTurn === nbEquipes)
            this.setState({teamTurn: 1})
        else
            this.setState({teamTurn: teamTurn + 1})
        this.setState({word: this.selectWord()})
        this.setState({duringGame: 0})
        this.setState({time: -1})
    }

    passWord = (id) => {
        const { words, wordsDiscover, word, teamTurn } = this.state
        if (id === 1){
            this.setState( state => {
                const score = state.score.map((item, j) => {
                    if (j === teamTurn) {
                        return item + 1;
                    } else {
                        return item;
                    }
                });
                return {
                    score,
                };
            });
            if (words.length !== wordsDiscover.length + 1){
                wordsDiscover.push(word)
                this.setState({wordsDiscover : wordsDiscover})
                this.setState({word: this.selectWord()})
            }
            else {
                this.setState({time: -1})
                this.setState({duringGame: 2})
            }
        }
        else if (id === 0)
            this.setState({word: this.selectWord(1)})
    }

    selectWord = () => {
        const { word, words, wordsDiscover } = this.state
        var i = 0
        if (word === '')
            return words[0]
        else {
            while (word !== words[i])
                i++
            if (i !== words.length)
                i++
            if (i === words.length)
                    i = 0
            while (wordsDiscover.includes(words[i])){
                i++
            }
            return words[i]
        }
    }

    render() {
        const { stepGame, word, teamTurn, duringGame, time, score, nbEquipes } = this.state
        return (
            <div>
                {(stepGame === 0) &&
                    <SettingsGame
                        getNbEquipes={this.getNbEquipes}
                        getNbMots={this.getNbMots}
                        startGame={this.startGame}
                    />
                }
                {(stepGame === 1) &&
                    <GameRound1
                        word={word}
                        nbEquipes={nbEquipes}
                        teamTurn={teamTurn}
                        startGameRound1={this.startGameRound1}
                        startGameRound2={this.startGameRound2}
                        duringGame={duringGame}
                        passWord={this.passWord}
                        time={time}
                        score={score}
                    />
                }
                {(stepGame === 2) &&
                    <div>Game Round 2</div>
                }
                <Button onClick={() => this.props.onClick(0)} >Accueil</Button>
            </div>
        )
    }

    componentDidMount () {
        this.myInterval = setInterval(() => {
            const { time } = this.state
            if (time === 0)
                this.changeTeam()
            this.setState(prevState => ({
                time: prevState.time - 1
            }))
        }, 1000)
    }

    componentWillUnmount () {
        clearInterval(this.myInterval)
    }
}

export default SoloGame