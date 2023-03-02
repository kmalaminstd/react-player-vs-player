import { useState } from "react";

function ScoreForm({ endGame, setGameScore }) {

  const [score, setScore] = useState('')

  const formData = (e) => {
    e.preventDefault()
    if(score){
      setGameScore(score)
      setScore('')
    }
    
  }
  return (
    <div className="scoreform">
        <form onSubmit={formData}>
            <input disabled={endGame} onChange={(e)=> setScore(e.target.value)} value={score} type="number" />
            <button disabled={endGame}>Submit</button>
        </form>
    </div>
  )
}

export default ScoreForm