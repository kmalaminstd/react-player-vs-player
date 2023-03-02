import React from 'react'

function WinningScore({ winScore }) {
  return (
    <div className="winscore">
        <h3>Winning Score : { ' ' + winScore}</h3>
    </div>
  )
}

export default WinningScore