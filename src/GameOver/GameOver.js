import React from 'react'

function GameOver({ startAgain, winPlayer }) {
  return (
    <div className="gameovercard">
        <h3>Game Over</h3>
        <p>{winPlayer}</p>

        <button onClick={()=>startAgain()}>Start Again</button>
    </div>
  )
}

export default GameOver