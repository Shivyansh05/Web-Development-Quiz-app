import React, { useState } from 'react'
import { JsQuizData } from '../Data/Jsquizdata'
import QuizResult from './Javascriptresult';
function JQuiz({setshow}) {
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
        if(currentQuestion< JsQuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(clickedOption===JsQuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const jsanswer=()=>{
        setshow("ansjs")
    }
  return (
    <div>
        <p className="heading-txt">Javascript quiz</p>
        <div className="container">
            {showResult ? (
                <QuizResult score={score} totalScore={JsQuizData.length} answer={jsanswer} setmain={setmain} setShowResult={setShowResult}/>
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{JsQuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {JsQuizData[currentQuestion].options.map((option,i)=>{
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
            <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
            </>)}
        </div>
    </div>
  )
}

export default JQuiz