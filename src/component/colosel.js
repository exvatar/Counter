import React, { Component } from 'react'

export default class colosel extends Component {
    state = {
        inputValue: "",
        count: 0,
        img: ["https://picsum.photos/200/300", "https://picsum.photos/300/400", "https://picsum.photos/400/500"]
    };

    render() {
        return (
            <div>
                <button disabled={this.state.count === 0} onClick={() => { this.setState({ count: this.state.count - 1 }) }}>ลบ</button>
                <img src={this.state.img[this.state.count]}></img>
                <button disabled={this.state.count === 2} onClick={() => { this.setState({ count: this.state.count + 1 }) }}>บวก</button>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}
