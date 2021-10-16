import { Component } from "react";
import Message from "./Message";

import logo from "./logo.svg";
import "./App.css";

class App extends Component<any> {
  componentDidMount() {
    console.log("çomponent mounted");
  }

  componentDidUpdate() {
    console.log("component updated.");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message message="This is a simple message" />
        </header>
      </div>
    );
  }
}

export default App;
