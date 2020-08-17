import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "../components/home/Home";
import Navigator from "../components/navigator/Navigator"
import Calculator from "../components/calculator/Calculator"
import Timer from "../components/timer/Timer"


class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Navigator />
          <div className="main">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/calculator' component={Calculator}/>
              <Route exact path='/timer' component={Timer}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
