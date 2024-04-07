import { Reansdata } from "../Data/Reansdata"
function Reans({setshow}){
  const sets=()=>{
    setshow("main")
  }
  return <>
  <h1 className="heading-txt">ANSWERS</h1>
  <div className="answercontainer">
   {Reansdata.map((answer,i)=>{
    return (<div className="answers"> {i+1}: {answer.answer}</div>)
   })}
   <button className="mainbans" onClick={sets}>Main page</button>
  </div>
  </>
}
export default Reans