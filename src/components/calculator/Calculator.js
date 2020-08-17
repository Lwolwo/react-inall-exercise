import React, { Component } from "react";
import "./Calculator.less";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class Calculator extends Component {
  state = {
    result: "",
    button: [
      "+",
      "-",
      "×",
      "7",
      "8",
      "9",
      "4",
      "5",
      "6",
      "1",
      "2",
      "3",
      "0",
      "Clear",
      "=",
    ],
  };

  handleOnClick = (value) => {
    if (value === "=") {
      const result = eval(
        this.state.result.replace(new RegExp("×", "gm"), "*")
      ) + "";

      this.setState({
        result: result,
      });
    } else if (value === "Clear") {
      this.setState({
        result: "",
      });
    } else {
      this.setState({
        result: this.state.result.concat(value),
      });
    }
  };

  render() {
    const { result, button } = this.state;
    return (
      <div className="calculator">
        <h1 className="title">在线计算器</h1>
        <div className="calc">
          <div className="display">{result}</div>
          <div className="button-group">
            {button.map((item, index) => {
              return (
                <button
                  key={index}
                  className={
                    index <= 2
                      ? "btn".concat(" operator")
                      : index <= 12
                      ? "btn".concat(" numbers")
                      : index == 13
                      ? "btn".concat(" clear")
                      : "btn".concat(" equal")
                  }
                  onClick={() => this.handleOnClick(item)}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <Link to="/" className="back">
          <h1>回到主页</h1>
        </Link>
      </div>
    );
  }
}

export default Calculator;
