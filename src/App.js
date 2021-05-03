import logo from './logo.svg';
import './App.css';
//import Game from './components/Game';
import React, { Fragment, useState } from 'react';
import Game from './components/Game';
import SingUp from './components/SingUp';
//import SingIn from './components/SingIn';
//import NewGame from './components/NewGame';

function App() {
  const [accion, setAccion] = useState(0);
  //const [session, setSession] = useState(0);
  const [user, setUser] = useState("");

  const [login, setLogin] = useState({name: null});

  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(8);
  const [mines, setMines] = useState(5);

  const [loaded, setLoaded] = useState(5);
  const [id, setId] = useState(5);
  const [mode, setMode] = useState("new");

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

  const loadUser = e => {
    const u= user
    let url = "https://api.israromero.com/minesweeper/v1/users/"+u;

    fetch(url, {method: 'GET'})
        .then(res => res.json())
        .then(json => {
          //console.log(json)
          json.name !== null
            ? setLogin(json)
            : alert("User Not Found!")
        })  
  };

  const loadGame = e => {
    console.log(e.target.id)
    setId(e.target.id);
    let url = "https://api.israromero.com/minesweeper/v1/"+e.target.id;

    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log("Se cargó: ", json);
            setLoaded(json);
            setMode("load");
            setWidth(json.width);
            setHeight(json.height);
            setMines(json.mines);
            setAccion(10);
        })

  };

  const handleChange = (e) =>{
    setUser(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="inline"><img src={logo} className="App-logo" alt="logo" />React Minesweeper</div>
      </header>
      <button onClick={() => setAccion(1)}>New Game</button>
      {(login.name === null)
        ? <><button onClick={() => setAccion(2)}>Sing in</button>
          <button onClick={() => setAccion(3)}>Sing up</button></>
        : <><button onClick={() => {setAccion(4); }}>Load Game</button></>
      }
      
      {(login.name !== null)
          ? <>
              <h4>Hi {login.name}</h4>
            </>
          : <></>}  

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
          ? <Game width={width} height={height} mines={mines} session={login} mode={mode} loaded={loaded} id={id} />
          : <></>}
        <br /><br />
        {(accion === 3)
          ? <SingUp />
          : <></>}

        {(accion === 2 && login.name === null)
          ? <>
                <h3>Sing in</h3>
                <label>User Name: </label>
                <input onChange={handleChange} name="user" type="text" min="1" max="20" value={user}/>
                <br/><br/>
                <button type="button" onClick={loadUser}>Login</button>
            </>
          : <></>}

        {(accion === 4)
          ? login.games.map((el, index) => 
              <Fragment key="index"> <button  id={el} onClick={loadGame}>Game {index}</button><br /> </Fragment>
            )
          : <></>}
    </div>
  );
}

export default App;
