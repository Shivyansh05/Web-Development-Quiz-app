import React from "react";
import Quiz from "./Quiz";
import JQuiz from "./Javascriptquiz";
function Mainpage({setshow}){
  const setjava=()=>{
    setshow("javascript");
  }
  const setreact=()=>{
    setshow("react");
  }
return <>
<div className="wholecontainer">
<h1 className="mainpageheading">Web Development Quiz</h1>
<h1 className="mainpageheading1">Choose your topic for the quiz</h1>
<div className="containerofquiz">
  <span> <button className="javasc" onClick={()=>{setjava()}}>JAVASCRIPT QUIZ</button></span>
  <span> <button className="javasc" onClick={()=>{setreact()}}>REACTJS QUIZ</button></span>
</div>
</div>
</>
}
export default Mainpage;