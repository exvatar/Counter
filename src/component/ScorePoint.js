import React, { Component } from 'react'

export default class ScorePoint extends Component {
    
    render() {
        let borderColor = this.props.turn === true ? `red` : `black`;
        return (
            <div style={{ flexGrow: "1", border: "1px solid", borderColor: borderColor, padding: "20px", margin: "10px" }}>
                <h1>{this.props.name}</h1>
                <h3>{this.props.score}</h3>
        <h1>{console.log(this.props.turn)}</h1>
            </div>
        )
    }
}
