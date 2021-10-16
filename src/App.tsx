import logo from './logo.svg';
import Message from './Message';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message />
      </header>
    </div>
  );
}

export default App;
