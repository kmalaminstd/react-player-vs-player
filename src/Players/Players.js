
import React from 'react'

function Players({ playerOneScore, playerTwoScore}) {
  return (
    <p className="players">
        Player One Score : { ' ' + playerOneScore} <br/>
        Player Two Score : { ' ' + playerTwoScore}


    </p>
  )
}

export default Players