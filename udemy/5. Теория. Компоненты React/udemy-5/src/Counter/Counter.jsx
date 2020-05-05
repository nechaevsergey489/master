import React, { Component } from "react";
import Counter2 from "../Counter2/Counter2";
import Aux from "../hoc/Aux";

export default class Counter extends Component {
  state = {
    counter: 0,
  };

  addCounter = () => {
    // this.setState({ counter: this.state.counter + 1 });
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };

  render() {
    return (
      <Aux>
        <Counter2 />
        <h2>Counter {this.state.counter}</h2>
        <button onClick={this.addCounter}>+</button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          -
        </button>
      </Aux>
    );
  }
}
