import logo from './logo.svg';
import './App.css';
//import Game from './components/Game';
import React, { useState } from 'react';
import Game from './components/Game';
//import NewGame from './components/NewGame';

function App() {
  const [accion, setAccion] = useState(0);
  const [session, setSession] = useState(0);

  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(8);
  const [mines, setMines] = useState(5);

  const onWidthChange = (e) => {
    setWidth(e.target.value)
  }
  const onHeightChange = (e) => {
    setHeight(e.target.value)
  }
  const onMinesChange = (e) => {
    setMines(e.target.value)
  }

  const valida = () => {
    (width > 20)
      ? alert("Width too high!")
      : (width < 2) 
        ? alert("Width too low!")
        : (height > 30)
          ? alert("Height too high!")
          : (height < 2)
            ? alert("Height too low!")
            : (mines >= (width*height))
              ? alert("Mines too high!")
              : (mines < 1)
                ? alert("Mines too low!")
                : setAccion(10);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="inline"><img src={logo} className="App-logo" alt="logo" />React Minesweeper</div>
      </header>
      <button onClick={() => setAccion(1)}>New Game</button>
      {(session === 0)
        ? <><button onClick={() => setAccion(2)}>Sing in</button>
          <button onClick={() => setAccion(3)}>Sing up</button></>
        : <><button onClick={() => setAccion(4)}>Load Game</button>
        <button onClick={() => setAccion(5)}>Save Game</button></>
      }
      
      {(accion === 1)
        ? <div><br /><br />
              <label htmlFor="width">Width: </label>
              <input onChange={onWidthChange} name="width" type="number" min="1" max="20" value={width}/>&nbsp;&nbsp;&nbsp;
              <label htmlFor="height">Height:</label>
              <input onChange={onHeightChange} name="height" type="number" min="1" max="20" value={height}/>&nbsp;&nbsp;&nbsp;
              <label htmlFor="mines">Mines: </label>
              <input onChange={onMinesChange} name="mines" type="number" min="1" max="99" value={mines}/>
              <br /><br />
              <button type="button" onClick={valida}>Let's Play</button>
          </div>
        : (accion === 10)
          ? <Game width={width} height={height} mines={mines} />
          :console.log("WAITING")}
    </div>
  );
}
//1->New Game
//2->New User
//3->Login
export default App;
