import React, { Component } from "react";
import Navigation from "./components/Navigation";
import { Button } from "react-bootstrap";
import Counter from "./components/Counter";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  showhide = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <h1 style={{ textAlign: "center", color: "rgb(13, 110, 253)" }}>
          YA AHLIN <br></br>this is my portfolio
        </h1>
        <Button
          style={{ alignItems: "center", color: "rgb(13, 110, 253)" }}
          onClick={this.showhide}
          variant="outline-light"
        >
          {this.state.show ? "Aslema " : "Beslema "}
        </Button>{" "}
        <Counter />
      </div>
    );
  }
}

