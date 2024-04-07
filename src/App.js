import React from 'react'
import Quiz from './components/Quiz'
import { useState } from 'react'
import Mainpage from './components/Mainpage'
import "./App.css"
import JQuiz from './components/Javascriptquiz'
import Jsans from './components/Jsans'
import Reans from './components/Reans'
function App() {
  const [show,setshow] = useState("main");
  return (
    <>
   {show==="main"?<Mainpage setshow={setshow}/> : show==="javascript"?<JQuiz setshow={setshow}/>: show==="ansjs"?<Jsans setshow={setshow}/>: show==="ansre"?<Reans setshow={setshow}/>:<Quiz setshow={setshow}/>}
    </>
  )
}

export default App