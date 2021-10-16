import logo from './logo.svg';
import Message from './Message';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message message="This is a simple message" />
      </header>
    </div>
  );
}

export default App;
