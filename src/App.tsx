import logo from './logo.svg';
import './App.css';

function App() {
  let firstValue: string = "Yushan";
  let secondValue: number = 10;
  let thirdValue: boolean = true;
  // array
  let fourthValue: number[] = [1, 3, 5];
  let fifthValue: Array<string> = ['2', '5', 'Yushan'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {fifthValue} is of {typeof fifthValue} type!
        </p>
      </header>
    </div>
  );
}

export default App;
