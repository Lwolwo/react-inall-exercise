import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.less';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="tools">
          <img
            src={require('../../images/hero-image.png')}
            alt="hero-image"
            className="img"
          />
          <p class="text">在线实用工具</p>
        </div>
        <div className="tools-item">
          <Link to="/calculator" className="item-link">
            <div className="calculator">
              <img
                className="img"
                src={require('../../images/calculator.png')}
                alt="hero-image"
              />
              <p>计算器</p>
            </div>
          </Link>
          <Link to="/timer" className="item-link">
            <div className="timer">
              <img
                className="img"
                src={require('../../images/timer.png')}
                alt="hero-image"
              />
              <p>倒计时</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
