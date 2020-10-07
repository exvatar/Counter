import React, { Component } from 'react'

export default class TapComponent extends Component {
    state = {
        count: 0,
        img: ["https://picsum.photos/200/300", "https://picsum.photos/300/400", "https://picsum.photos/400/500"]
    };
    render() {
        return (
            <div>
                <button onClick={() => this.setState({count:"0"})}>Set 1</button>
                <button onClick={() => this.setState({count:"1"})}>Set 2</button>
                <button onClick={() => this.setState({count:"2"})}>Set 3</button>
                <div>
                    <img src={this.state.img[this.state.count]}></img>
                </div>
            </div>
        )
    }
}
