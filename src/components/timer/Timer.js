import React, { Component } from "react";
import "./Timer.less";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Timer extends Component {
  state = {
    time: "",
    clock: null,
    display: "Start",
    btnDisable: false,
  };

  handleChange = (event) => {
    this.setState({
      time: event.target.value,
      clock: Number(event.target.value)
    });
  };

  handleClick = () => {
    this.setState({
      btnDisable: true,
    });

    const timer = setInterval(() => {
      if (this.state.clock > 0) {
        this.setState({
          display: this.state.clock + " Seconds",
          clock: this.state.clock - 1,
        });
      } else {
        this.setState({
          btnDisable: false,
          display: "End",
        });
        clearInterval(timer);
      }
    }, 1000);
  };
  render() {
    const { time, display, btnDisable } = this.state;
    return (
      <div className="timer">
        <h1 className="title">在线倒计时器</h1>
        <div className="timer-wrapper">
          <div className="operator">
            <div className="set">
              <h2>设置时间</h2>
              <input
                type="number"
                min="0"
                className="input"
                value={time}
                onChange={this.handleChange}
              ></input>
            </div>
            <button
              className="btn"
              disabled={btnDisable}
              onClick={this.handleClick}
            >
              Start
            </button>
          </div>
          <div className="display">{display}</div>
        </div>
        <Link to="/" className="back">
          <h2>回到主页</h2>
        </Link>
      </div>
    );
  }
}

export default Timer;
