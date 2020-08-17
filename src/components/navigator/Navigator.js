import React, { Component } from 'react';
import './Navigator.less';
import { Link } from 'react-router-dom';

class Navigator extends Component {
  render() {
    return (
      <div className="navigator">
        <Link to="/">HOME</Link>
        <Link to="/calculator">在线计算器</Link>
        <Link to="/timer">在线倒计时</Link>
      </div>
    );
  }
}

export default Navigator;
