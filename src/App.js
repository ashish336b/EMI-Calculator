import React, { Component } from "react";
import Body from "./components/Body.jsx";
import Navbar from "./components/Navbar.jsx";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 0,
    };
  }
  render() {
    return (
      <div>
        <Navbar title="EMI Calculator" />
        <Body />
      </div>
    );
  }
}

export default App;
