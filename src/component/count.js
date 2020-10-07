import React, { Component } from 'react'

export default class count extends Component {
    state = {
        inputValue: "",
        count: 0
    };
    render() {
        return (
            <div>
                <div>
                    <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>บวก</button>
                    <button disabled={this.state.count === 0} onClick={() => { this.setState({ count: this.state.count - 1 }) }}>ลบ</button>
                    <button onClick={() => { this.setState({ count: 0 }) }}>Reset</button>
                    <h1>{this.state.count}</h1>
                </div>
            </div>
        )
    }
}
