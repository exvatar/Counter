import React, { Component } from 'react'
import ScorePoint from './ScorePoint';

export default class RollDice extends Component {

    state = {
        rollDice: 0,
        rollPoint: 0,
        pointA: 0,
        pointB: 0,
        turn: `A`
    }

    setRollDice = () => {
        let rollDice = Math.round(Math.random() * 6);
        let rollPoint = this.state.rollPoint;
        let turn = this.state.turn != `A` ? `A` : `B`;
        console.log(turn)
        if (rollDice === 0 || rollDice === 1) {
            rollDice = 1;
            rollPoint = 0;
            this.setState({ turn: turn })
        } else {
            rollPoint += rollDice;
        }
        this.setState({ rollDice: rollDice, rollPoint: rollPoint })
    }

    setPoint = () => {
        let rollPoint = this.state.rollPoint;
        let pointA = this.state.pointA
        let pointB = this.state.pointB
        if (this.state.turn === `A`) {
            this.setState({ pointA: pointA += rollPoint });
            this.setState({ turn: `B` });
        } else if (this.state.turn === `B`) {
            this.setState({ pointB: pointB += rollPoint });
            this.setState({ turn: `A` });
        }
        this.setState({ rollPoint: 0, rollDice: 0 })
    }

    resetGame = () => {
        this.setState({ rollDice: 0, rollPoint: 0, pointA: 0, pointB: 0, turn: `A` })
    }

    render() {
        return (
            <div>
                <div style={{ borderBottom: "2px solid black", padding: "20px" }}>
                    <button onClick={this.resetGame}>New Game</button>
                </div>
                <div style={{ display: "flex", width: "100vw" }}>
                    <ScorePoint name="Player 1" score={this.state.pointA} turn={this.state.turn === `A`}></ScorePoint>
                    <div style={{ flexGrow: "1", border: "1px solid black", padding: "20px", margin: "10px" }}>
                        <div>
                            <button onClick={this.setRollDice}>Roll</button>
                            <button onClick={this.setPoint}>Keep</button>
                            <h1>{this.state.rollDice}</h1>
                            <h1>Score : {this.state.rollPoint}</h1>
                        </div>
                    </div>
                    <ScorePoint name="Player 2" score={this.state.pointB} turn={this.state.turn === `B`}></ScorePoint>
                </div>
            </div>
        )
    }
}
