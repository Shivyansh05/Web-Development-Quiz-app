import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData'
import QuizResult from './QuizResult';
function Quiz({setshow}) {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    const setmain=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
        setshow("main")
    }
    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< QuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const answer=()=>{
        setshow("ansre")
    }
    const[showans,setshowans] = useState(0);
  return (
    <div>
        <p className="heading-txt">React Quiz</p>
        <div className="container">
           {showResult ? (
                <QuizResult score={score} totalScore={QuizData.length} answer={answer} setmain={setmain}/>
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{QuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {QuizData[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        // className="option-btn"
                        className={`option-btn ${
                            clickedOption === i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
          <button id="next-button" onClick={changeQuestion}>NEXT</button>
            </>)}
        </div>
    </div>   
  )
}

export default Quiz