import React, { useContext } from 'react'
import { MyContext } from '../App'

const Display = () => {
  const{state,setState,koma,setKoma,hugo,setHugo,answer,setAnswer} = useContext(MyContext);
  const addAnswer = ()=>{
      let newAnswer = [...answer];
      newAnswer = [newAnswer,',',state+koma+hugo];
      setState('');
      setKoma('');
      setHugo('');
      setAnswer(newAnswer);

  }
  return (
    <>
   
    <div id="komaHyouji">
    <div id='sendForm'>
      <p>{answer}</p>
    </div>
      <div className="input_tag"><span className="input_text">{state}{koma}{hugo}</span>
      <button className="input_button" onClick={addAnswer}>入力</button></div>
    </div>
    </>
  )
}

export default Display