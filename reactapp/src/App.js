import logo from './logo.svg';
import './App.css';

//
import {useState} from "react";
import Button from './components/UI/Button/Button';
import Card from './components/UI/Card/Card';
import Banner from './components/UI/Banner/Banner';
//

function App() {
  //
  const [start,setStart] = useState(true);
  const [attempt, correctAnswerMarkUpdate] = useState(0);
  const [qsnAttempt, setqsnAttempt] = useState(0);
  const [card, setCard] = useState(false);
  const [result, setResult] = useState(false);
  const [banner, setBanner] = useState(false);

  const handleStart = () =>{
    setStart(false);
    setCard(true);
    correctAnswerMarkUpdate(0);
    
  }
  //
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
