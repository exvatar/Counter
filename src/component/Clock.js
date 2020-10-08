import React, { Component } from 'react'

export default class Clock extends Component {

    constructor() {
        super();
        this.state = {
            Bangkok: "Asia/Bangkok",
            London: "Europe/London",
            Japan: "Japan",
            BangkokTime : ""
        }
        let itv;
    }

    componentDidMount() {
        let itv = setInterval(() => {
            let d = new Date();
            let g = d.toLocaleTimeString("en-US", { timeZone: this.state[this.props.location]});
            this.setState({ BangkokTime: g })
        }, "1000")
    }

    // componentWillUnmount(){
    //     clearInterval(this.interval)
    // }
    render() {
        return (
            <div>
                <h1>{this.props.location}</h1>
                <h2>{this.state.BangkokTime}</h2>
            </div>
        )
    }
}
