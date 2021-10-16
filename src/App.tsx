import logo from './logo.svg';
import './App.css';

function App() {
  // tuple
  let aTuple: [string, number] = ["Yushan", 2021];
  // enum -> To store magical values
  enum Codes {
    first = 1,
    second
  }
  // any
  let firstName: any = "yushan";
  // void
  const warning = (): void => {
    console.log("Warning");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {firstName} is of {typeof firstName} type!
        </p>
      </header>
    </div>
  );
}

export default App;
