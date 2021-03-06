import { Component } from "react";
import Message from "./Message";

import logo from "./logo.svg";
import "./App.css";

class App extends Component<any> {
  componentDidMount() {
    console.log("├žomponent mounted");
  }

  componentDidUpdate() {
    console.log("component updated.");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message name="Yushan" message="this is a simple message" />
        </header>
      </div>
    );
  }
}

export default App;
