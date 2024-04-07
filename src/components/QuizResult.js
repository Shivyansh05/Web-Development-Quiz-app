import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div>
    <span><button className="exi-button" onClick={props.answer}>Answers</button><button className="exi-button" onClick={props.setmain}>Main page</button></span>
    </>
  )
}

export default QuizResult