import './App.css'
import WinningScore from './WinningScore/WinningScore';
import Players from './Players/Players';
import ScoreForm from './ScoreForm/ScoreForm';
// import Winner from './Winner/Winner';
import GameOver from './GameOver/GameOver';


import { useState } from 'react';

function App() {

  const [winScore, setWinScore] = useState(20)
  const [playerOne, setPlayerOne] = useState(false)
  const [playerTwo, setPlayerTwo] = useState(false)
  const [winPlayer, setWinPlayer] = useState(null)
  const [playerOneScore, setPlayerOneScore] = useState(0)
  const [playerTwoScore, setPlayerTwoScore] = useState(0)
  const [endGame, setEndGame] = useState(false)

  const setGameScore = (e) => {
    if(e){
      resetFunc()
    }
    setWinScore(e)
  }

  const randomNumberGen = () => {
    return Math.floor(Math.random() * winScore + 1) 
  }

  const playerOneHandle = () => {
    setPlayerOne(true)
    setPlayerTwo(false)
    let num = randomNumberGen()
    setPlayerOneScore(num)
    if(Number(winScore) === Number(num)){
      setPlayerOne(true)
      setPlayerTwo(true)
      setWinPlayer('Player One is Winner')
      setEndGame(true)
    }
  }

  const playerTwoHandle = () => {
    setPlayerTwo(true)
    setPlayerOne(false)
    let num = randomNumberGen()
    setPlayerTwoScore(num)
    console.log(winScore, num);
    if(Number(winScore) === Number(num)){
      setPlayerOne(true)
      setPlayerTwo(true)
      setWinPlayer('Player Two is Winner')
      setEndGame(true)
    }
  }

  const resetFunc = () => {
    setWinScore(20)
    setPlayerOne(false)
    setPlayerTwo(false)
    setWinPlayer(null)
    setPlayerOneScore(0)
    setPlayerTwoScore(0)
  }

  const startAgain = () => {
    setEndGame(false)
    setWinScore(20)
    setPlayerOne(false)
    setPlayerTwo(false)
    setWinPlayer(null)
    setPlayerOneScore(0)
    setPlayerTwoScore(0)
  }

  return(
    <>

    
      {
        endGame && winPlayer && <GameOver startAgain={startAgain} winPlayer={winPlayer} />
      }
     

      <div className="main">
        <div className="topbar">
          <h1>Player v/s Player</h1>
        </div>

        <WinningScore winScore={winScore} />
        <Players playerOneScore={playerOneScore} playerTwoScore={playerTwoScore} />


          {/* <div>
            {
              winPlayer && <Winner winPlayer={winPlayer} /> 
            }
          </div> */}

        <ScoreForm endGame={endGame} setGameScore={setGameScore} />

        <div className="playerbtn">
          <button onClick={playerOneHandle} disabled={playerOne}>Player One</button>
          <button onClick={playerTwoHandle} disabled={playerTwo}>Player Two</button>
            <div style={{marginTop: '10px'}}>
              <button disabled={endGame} onClick={() => resetFunc()}> Reset</button>
            </div>
        </div>

        
      </div>

      
      
    </>
  )


}


export default App;
